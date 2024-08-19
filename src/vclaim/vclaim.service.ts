import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable, Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { catchError, map, timestamp } from 'rxjs';

import { createHmac } from 'crypto';

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
        private readonly httpService: HttpService
    ) { }

    getReferensiFaskes(wilayah: string, tipe: number) {

        const timestamp = Math.floor(Date.now() / 1000);
        const hash = createHmac('sha256', process.env.VCLAIM_SECRET)
            .update(process.env.VCLAIM_ID + '&' + timestamp)
            .digest('base64')

        const headers = {
            'X-cons-id': process.env.VCLAIM_ID,
            'X-timestamp': timestamp,
            'X-signature': hash,
            'user_key': '76e6eae503b9b0ce01fc6513a4244749'
        }

        const endpoint = process.env.VCLAIM_URL + '/referensi/faskes/' + wilayah + '/' + tipe;
        return this.httpService
            .get(endpoint, { headers: headers })
            .pipe(
                map((res) => {
                    return res.data
                })
            )
            .pipe(
                catchError(() => {
                    throw new ForbiddenException('API not available');
                }),
            );
    }
}
