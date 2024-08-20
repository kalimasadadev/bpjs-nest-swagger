import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable, Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { catchError, map } from 'rxjs';

import { createHmac } from 'crypto';
import { VclaimTokenDto } from './dto/VclaimTokenDto.dto';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        })
    ]
})

@Injectable()
export class VclaimService {
    private logger = new Logger
    constructor(
        private readonly httpService: HttpService,
    ) { }

    getVclaimToken(vclaim_id: string, vclaim_secret: string, vclaim_userkey: string) {
        const timestamp = Math.floor(Date.now() / 1000);
        const hash = createHmac('sha256', vclaim_secret)
            .update(vclaim_id + '&' + timestamp)
            .digest('base64')

        const vclaimHeaders = {
            'X-cons-id': vclaim_id,
            'X-timestamp': timestamp,
            'X-signature': hash,
            'user_key': vclaim_userkey
        }

        return vclaimHeaders;
    }

    getReferensiFaskes(vclaimTokenDto: VclaimTokenDto,wilayah: string, tipe: number) {
        const endpoint = process.env.VCLAIM_URL + '/referensi/faskes/' + wilayah + '/' + tipe;
        const apiHeaders = this.getVclaimToken(vclaimTokenDto.vclaim_id, vclaimTokenDto.vclaim_secret, vclaimTokenDto.vclaim_userkey);
        console.log(apiHeaders)
        return this.httpService
            .get(endpoint, { headers: apiHeaders })
            .pipe(
                map((res) => {
                    return res.data
                })
            )
            .pipe(
                catchError((err) => {
                    // throw new ForbiddenException('API not available');
                    throw new ForbiddenException(err);
                }),
            );
    }
}
