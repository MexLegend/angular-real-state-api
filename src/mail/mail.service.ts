import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {

    constructor(private readonly mailerService: MailerService) {}

    sendMail( from: string, message: string ):void {
        this.mailerService.sendMail({
            to: process.env.EMAIL_USER,
            from,
            subject: "Test contact email",
            html: `<b>Message: ${ message }</b>`
        })
    }
}
