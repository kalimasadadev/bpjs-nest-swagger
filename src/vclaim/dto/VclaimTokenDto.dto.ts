import { ApiProperty } from "@nestjs/swagger";

export class VclaimTokenDto {
    @ApiProperty()
    vclaim_id: string;

    @ApiProperty()
    vclaim_secret: string;

    @ApiProperty()
    vclaim_userkey: string;
}
