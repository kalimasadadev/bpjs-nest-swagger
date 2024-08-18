import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PenggunaService } from './pengguna.service';
import { CreatePenggunaDto } from './dto/create-pengguna.dto';
import { UpdatePenggunaDto } from './dto/update-pengguna.dto';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags("penggunas")
@Controller('pengguna')

@UseGuards(AuthGuard)
@ApiHeader({
  name: 'access_token',
  required: true
})
export class PenggunaController {
  constructor(private readonly penggunaService: PenggunaService) { }

  @Post()
  create(@Body() createPenggunaDto: CreatePenggunaDto) {
    return this.penggunaService.create(createPenggunaDto);
  }

  @Get()
  findAll() {
    return this.penggunaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.penggunaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePenggunaDto: UpdatePenggunaDto) {
    return this.penggunaService.update(+id, updatePenggunaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.penggunaService.remove(+id);
  }
}
