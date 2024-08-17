import { Injectable } from '@nestjs/common';
import { CreatePenggunaDto } from './dto/create-pengguna.dto';
import { UpdatePenggunaDto } from './dto/update-pengguna.dto';
import { Pengguna } from './entities/pengguna.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PenggunaService {
  constructor(
    @InjectRepository(Pengguna)
    private penggunaRepository: Repository<Pengguna>
  ) { }

  findByUsername(username: string) {
    return this.penggunaRepository.findOneBy({ username });
  }

  create(createPenggunaDto: CreatePenggunaDto) {
    // return 'This action adds a new pengguna';
    return this.penggunaRepository.insert(createPenggunaDto);
  }

  findAll() {
    // return `This action returns all pengguna`;
    return this.penggunaRepository.find();
  }

  findOne(id: number) {
    // return `This action returns a #${id} pengguna`;
    return this.penggunaRepository.findOneBy({ id });
  }

  update(id: number, updatePenggunaDto: UpdatePenggunaDto) {
    // return `This action updates a #${id} pengguna`;
    return this.penggunaRepository.update({ id }, updatePenggunaDto);
  }

  async remove(id: number) {
    // return `This action removes a #${id} pengguna`;
    await this.penggunaRepository.delete(id);
  }
}
