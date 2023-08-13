import {
  Controller,
  Post,
  Body,
  Get,
  HttpCode,
  UseGuards,
  Req,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Public } from './decorators/public.decorator';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import { AuthGuard } from '@nestjs/passport';
import { OAuth2Client } from 'google-auth-library';

// const client = new OAuth2Client(
//   process.env.GOOGLE_CLIENT_ID,
//   process.env.GOOGLE_CLIENT_SECRET,
// );

@Controller('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

  // @Public()
  // @Get('google')
  // @UseGuards(AuthGuard('google'))
  // async googleAuth() {
  // const ticket = await client.verifyIdToken({
  //   idToken: token,
  //   audience: process.env.GOOGLE_CLIENT_ID,
  // });
  // const payload = ticket.getPayload();
  // const data = await this._authService.loginGoogle({
  //   email: payload.email,
  //   name: payload.name,
  //   image: payload.picture,
  // });
  // return data;
  // }

  @Public()
  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleCallback(@Req() req, @Res() res) {
    return this._authService.googleRedirect(req, res);
  }

  @Public()
  @Post('google/login')
  @UseGuards(AuthGuard('google'))
  googleLogin(@Req() req) {
    return this._authService.googleLogin(req);
  }

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() payload: LoginDto) {
    return this._authService.login(payload);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout() {
    return this._authService.logout();
  }

  @Public()
  @UseGuards(RefreshTokenGuard)
  @Post('refresh')
  refresh(@Req() request) {
    const { refreshToken, sub: userId } = request;
    return this._authService.refresh(userId, refreshToken);
  }
}
