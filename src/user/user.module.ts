import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { MailService } from '../mail/mail.service';

@Module({
  controllers: [UserController],
  providers: [AuthService, ConfigService, JwtService, MailService, UserService],
})
export class UserModule {}
