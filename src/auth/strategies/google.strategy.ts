import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';

import { UserService } from '../../user/user.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly _userService: UserService) {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      scope: ['email', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
    // let user: any;

    // user = await this._userService.getUser(profile.emails[0].value);

    // if (user) return user;

    // user = await this._userService.register({
    //   email: profile.emails[0].value,
    //   name: profile.displayName,
    //   password: '',
    // });
    // console.log('Validate');
    // console.log(user);
    // return user || null;

    const { emails, displayName, photos } = profile;
    const user = {
      email: emails[0].value,
      name: displayName,
      picture: photos[0].value,
      accessToken,
    };
    done(null, user);
  }
}
