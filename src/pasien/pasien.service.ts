import { Injectable } from '@nestjs/common';
import { CreatePasienDto } from './dto/create-pasien.dto';
import { UpdatePasienDto } from './dto/update-pasien.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pasien } from './entities/pasien.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PasienService {
  constructor(
    @InjectRepository(Pasien)
    private pasienRepository: Repository<Pasien>
  ) { }
  
  create(createPasienDto: CreatePasienDto) {
    // return 'This action adds a new pasien';
    return this.pasienRepository.insert(createPasienDto);
  }

  findAll() {
    // return `This action returns all pasien`;
    return this.pasienRepository.find();
  }

  findOne(id: number) {
    // return `This action returns a #${id} pasien`;
    return this.pasienRepository.findOneBy({ id });
  }

  update(id: number, updatePasienDto: UpdatePasienDto) {
    // return `This action updates a #${id} pasien`;
    return this.pasienRepository.update({ id }, updatePasienDto);
  }

  async remove(id: number) {
    // return `This action removes a #${id} pasien`;
    await this.pasienRepository.delete(id);
  }
}
