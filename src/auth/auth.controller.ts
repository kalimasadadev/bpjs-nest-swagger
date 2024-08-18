import { Body, Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiHeader, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreatePenggunaDto, LoginPenggunaDto } from 'src/pengguna/dto/create-pengguna.dto';
import { AuthGuard } from './auth.guard';

@ApiTags("auths")
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post()
    login(@Body() createPenggunaDto: LoginPenggunaDto) {
        return this.authService.login(createPenggunaDto.username, createPenggunaDto.password);
    }

    @UseGuards(AuthGuard)
    @ApiHeader({
        name: 'access_token',
        required: true
    })
    @Get("profile")
    getProfile(@Request() req) {
        // return req.user;
        return this.authService.getProfile(req.user.sub);
    }

}
