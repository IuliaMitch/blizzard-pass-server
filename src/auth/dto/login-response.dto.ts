import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entities/user.entity";

export class loginResponseDto {
    @ApiProperty({
        description: 'JWT gerado pelo login',
        example: 'Token gerado automaticamente'
    })
    token: string;


    @ApiProperty({
        description: 'Dados do usuario autenticado',
    })
    user: User
}