import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUrl, IsUUID } from "class-validator";

export class CreateProfileDto {
  @IsString()
  @ApiProperty({
    description: 'Nome do perfil',
    example: 'matry_xD'
  })
  title: string

  @IsUrl()
  @ApiProperty({
    description: 'Imagem de perfil',
    example: 'https://i.pinimg.com/564x/7f/ec/3a/7fec3ae10ce408d91264e6f1a116d858.jpg'
  })
  imageUrl: string

  @IsUUID()
  @ApiProperty({
    description: 'Id do usuário',
    example: ''
  })
  userId: string;

  @IsUUID()
  @ApiProperty({
    description: 'Gênero do jogo',
    example: ''
  })
  genderName: string;

  @IsUUID(undefined, {each: true})
  @ApiProperty({
    description: 'Jogos',
    example: '',
  })
  games: string[]
}
