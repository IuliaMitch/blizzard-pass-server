import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class loginDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Nickname do usuário',
        example: 'matry_XD'
    })
    nickname: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'Senha do Usuário',
        example: 'im54452323@'
    })
    password: string
}