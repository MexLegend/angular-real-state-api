import {
  Controller,
  Post,
  Body,
  HttpCode,
  UseGuards,
  Req,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Public } from './decorators/public.decorator';
import { RefreshTokenGuard } from './guards/refresh-token.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}

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
    return this._authService.refresh(userId);
  }
}
