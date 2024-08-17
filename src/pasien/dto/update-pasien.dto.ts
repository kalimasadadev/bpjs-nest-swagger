import { PartialType } from '@nestjs/swagger';
import { CreatePasienDto } from './create-pasien.dto';

export class UpdatePasienDto extends PartialType(CreatePasienDto) {}
