import { ConfigModule } from "@nestjs/config";

ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
});

export const jwtConstants = {
    secret: process.env.JWT_SECRET,
};
