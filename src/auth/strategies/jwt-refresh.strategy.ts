import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { JwtPayload } from '../types';

const AUTHORIZATION_HEADER_KEY = 'Authorization';
const BEARER_KEY = 'Bearer';

@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallback: true,
      secretOrKey: config.get<string>('JWT_RT_SECRET'),
    });
  }

  validate(req: Request, payload: JwtPayload) {
    const refreshToken = req
      ?.get(AUTHORIZATION_HEADER_KEY)
      ?.replace(BEARER_KEY, '')
      .trim();
    if (!refreshToken) throw new ForbiddenException('Refresh token malformed');

    return { ...payload, refreshToken };
  }
}
