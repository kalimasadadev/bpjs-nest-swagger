import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PenggunaService } from 'src/pengguna/pengguna.service';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {

    constructor(
        private readonly penggunaService: PenggunaService,
        private readonly jwtService: JwtService
    ) { }

    async getProfile(id: number) {
        return await this.penggunaService.findOne(id)
    }

    async login(
        username: string,
        passwordText: string
    ): Promise<any> {
        const user = await this.penggunaService.findByUsername(username);
        if (user?.password !== passwordText) {
            throw new UnauthorizedException();
        }

        // const { password, ...result } = user;
        // return result;

        const payload = { sub: user.id, user: user.username };
        const data = { id: user.id, username: user.username, status: user.status }
        return {
            data: await data,
            access_token: await this.jwtService.signAsync(payload, { secret: jwtConstants.secret })
        }
    }
}
