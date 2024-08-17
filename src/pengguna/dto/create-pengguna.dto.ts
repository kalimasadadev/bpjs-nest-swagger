import { ApiProperty } from "@nestjs/swagger";

export class CreatePenggunaDto {
    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    status: boolean;
}

export class LoginPenggunaDto {
    @ApiProperty()
    username: string;

    @ApiProperty()
    password: string;
}
