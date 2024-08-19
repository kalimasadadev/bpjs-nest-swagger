import { Module } from '@nestjs/common';
import { VclaimController } from './vclaim.controller';
import { VclaimService } from './vclaim.service';
import { HttpModule, HttpService } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5
    }),
  ],
  controllers: [VclaimController],
  providers: [VclaimService]
})
export class VclaimModule {}
