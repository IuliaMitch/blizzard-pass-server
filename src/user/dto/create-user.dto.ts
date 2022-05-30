import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDto {
    @ApiProperty({
        description: 'Nome do usuário',
        example: 'Iulia Mitch'
    })
    name: string
    @ApiProperty({
        description: 'Email do usuário',
        example: 'noipasz@gmail.com'
    })
    email: string 
    @ApiProperty({
        description: 'Senha do usuário',
        example: 'im54452323'
    })
    password: string
    @ApiProperty({
        description: 'CPF do usuário'
    })
    cpf: number
    @ApiProperty({
        description: 'Se o usuário é um ADM',
        example: true
    })
    isAdmin: boolean
}
