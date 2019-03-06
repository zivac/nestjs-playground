import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from '../auth.service';

@Controller('auth')
export class AuthController {

    constructor(
        private auth: AuthService
    ) {}

    @Post('login')
    async login(@Body('email') email: string, @Body('password') password: string): Promise<{token: string}> {
        return {token: await this.auth.signIn()};
    }

}
