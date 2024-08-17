import { Module } from '@nestjs/common';
import { PenggunaService } from './pengguna.service';
import { PenggunaController } from './pengguna.controller';
import { Pengguna } from './entities/pengguna.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pengguna]),
  ],
  exports: [
    TypeOrmModule
  ],
  controllers: [PenggunaController],
  providers: [PenggunaService],
})
export class PenggunaModule {}
