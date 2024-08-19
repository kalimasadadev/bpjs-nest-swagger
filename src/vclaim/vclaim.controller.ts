import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { VclaimService } from './vclaim.service';

@ApiTags('vclaims')
@Controller('vclaim')

export class VclaimController {
    constructor(private readonly vclaimService: VclaimService) {}

    @Get('referensi/:wilayah/:tipe')
    referensiFaskes(@Param('wilayah') wilayah: string, @Param('tipe') tipe: number) {
        var response = this.vclaimService.getReferensiFaskes(wilayah, tipe);
        return (response)
    }
}
