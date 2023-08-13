import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthGuardProvider } from './guards/jwt-auth.guard';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';
import { GoogleStrategy } from './strategies/google.strategy';
import { SessionSerializer } from './utils/serializer';
import { UserService } from '../user/user.service';

@Module({
  controllers: [AuthController],
  providers: [
    AuthGuardProvider,
    AuthService,
    GoogleStrategy,
    JwtRefreshStrategy,
    JwtService,
    JwtStrategy,
    SessionSerializer,
    UserService,
  ],
})
export class AuthModule {}
