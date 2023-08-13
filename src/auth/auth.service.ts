import {
  ForbiddenException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';

import { LoginDto } from './dto/login.dto';
import { PrismaService } from '../prisma/prisma.service';
import { JwtPayload, Tokens } from './types';
import { Request, Response } from 'express';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { validate as uuidValidate } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    private config: ConfigService,
    private jwtService: JwtService,
    private readonly _prismaService: PrismaService,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) { }

  async login({ email, password }: LoginDto) {
    const user = await this._prismaService.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) throw new ForbiddenException('Access Denied');

    const passwordMatches = await argon.verify(user.hashedPassword, password);

    if (!passwordMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(user.id, user.email);
    // await this.updateRtHash(user.id, tokens.refresh_token);

    return { tokens, user };
  }

  public async googleRedirect(req: Request, res: Response) {
    const userTempId = req.query['state'];
    await this.cacheManager.set(
      `temp-google-user__${userTempId}`,
      req.user,
      10000,
    );

    res.send('<script>window.close()</script>');
  }

  public async googleLogin(req: Request) {
    const authorization = req.get('authorization');
    if (!authorization) throw new UnauthorizedException();

    const userTempId = authorization.replace('Bearer ', '');
    if (!uuidValidate(userTempId)) throw new UnauthorizedException();

    const googleUser = await this.cacheManager.get(
      `temp-google-user__${userTempId}`,
    );

    await this.handleDatabaseUser();

    return googleUser;
  }

  handleDatabaseUser() {
    throw new Error('Method not implemented.');
  }

  async getTokens(userId: string, email: string): Promise<Tokens> {
    const jwtPayload: JwtPayload = {
      sub: userId,
      email: email,
    };

    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<string>('JWT_SECRET'),
        expiresIn: '1d',
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<string>('JWT_RT_SECRET'),
        expiresIn: '7d',
      }),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }

  logout() {
    return {};
  }

  async refresh(userId: string, refreshToken: string) {
    const user = await this._prismaService.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) throw new ForbiddenException('Access Denied');
    // if (userId !== this.user.id) {
    //   throw new ForbiddenException('Invalid token');
    // }

    const tokens = await this.getTokens(user.id, user.email);

    return tokens;
  }
}
