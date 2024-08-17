import { ApiProperty } from "@nestjs/swagger";

export class CreatePasienDto {
    @ApiProperty()
    no_rm: string;

    @ApiProperty()
    nama_lengkap: string;

    @ApiProperty()
    tempat_lahir: string;

    @ApiProperty()
    tanggal_lahir: Date;

    @ApiProperty()
    no_hp: number;

    @ApiProperty()
    no_identitas: number;
}
