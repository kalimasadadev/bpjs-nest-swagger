import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { VclaimService } from './vclaim.service';
import { VclaimTokenDto } from './dto/VclaimTokenDto.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('vclaims')
@Controller('vclaim')

@UseGuards(AuthGuard)
@ApiHeader({
    name: 'access_token',
    required: true
})
export class VclaimController {
    constructor(private readonly vclaimService: VclaimService) {}

    @Post('referensi/:wilayah/:tipe')
    referensiFaskes(
        @Body() vclaimTokenDto: VclaimTokenDto,
        @Param('wilayah') wilayah: string, 
        @Param('tipe') tipe: number) {
        var response = this.vclaimService.getReferensiFaskes(vclaimTokenDto, wilayah, tipe);
        return (response)
    }
}
