import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsString, Matches, MinLength } from "class-validator"

export class CreateUserDto {
    @ApiProperty({
        description: 'Nome do usuário',
        example: 'Iulia Mitch'
    })
    @IsString()
    name: string

    @IsString()
    @ApiProperty({
        description: 'Nickname do usuário',
        example: 'matryushka'
    })
    nickname: string

    @ApiProperty({
        description: 'Email do usuário',
        example: 'noipasz@gmail.com'
    })
    @IsString()
    email: string

    @ApiProperty({
        description: 'Senha do usuário',
        example: 'im54452323'
    })
    @IsString()
    @MinLength(6)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
      message: 'Senha muito fraca',
    })
    password: string

    @IsString()
    @ApiProperty({
        description: 'CPF do usuário'
    })
    cpf: string

    @IsBoolean()
    @ApiProperty({
        description: 'Se o usuário é um ADM',
        example: true
    })
    isAdmin: boolean
}
