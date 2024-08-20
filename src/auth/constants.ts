import { ConfigModule } from "@nestjs/config";
import { createHmac } from "crypto";

ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
});

export const jwtConstants = {
    secret: process.env.JWT_SECRET,
};

const timestamp = Math.floor(Date.now() / 1000);
const hash = createHmac('sha256', process.env.VCLAIM_SECRET)
    .update(process.env.VCLAIM_ID + '&' + timestamp)
    .digest('base64')

export const vclaimHeaders = {
    'X-cons-id': process.env.VCLAIM_ID,
    'X-timestamp': timestamp,
    'X-signature': hash,
    'user_key': process.env.VCLAIM_USERKEY
}