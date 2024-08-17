import { Module } from '@nestjs/common';
import { PasienService } from './pasien.service';
import { PasienController } from './pasien.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pasien } from './entities/pasien.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pasien]),
  ],
  exports: [
    TypeOrmModule
  ],
  controllers: [PasienController],
  providers: [PasienService],
})
export class PasienModule {}
