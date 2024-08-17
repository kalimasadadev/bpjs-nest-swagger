import { Body, Controller, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreatePenggunaDto, LoginPenggunaDto } from 'src/pengguna/dto/create-pengguna.dto';

@ApiTags("auths")
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post()
    login(@Body() createPenggunaDto: LoginPenggunaDto) {
        return this.authService.login(createPenggunaDto.username, createPenggunaDto.password);
    }
    // login(@Param('username') username: string, @Param('password') password: string) {
    //     // return this.authService.login(username, password);
    //     return console.log(username);
    // }

}
