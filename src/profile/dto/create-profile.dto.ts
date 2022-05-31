import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUrl, IsUUID } from "class-validator";
import { createProfileGamesDto } from "./create-profile-games.dto";

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
    example: '686a8b34-259a-438d-b710-ad7eeb9994eb'
  })
  userId: string;

  @IsUUID()
  @ApiProperty({
    description: 'Gênero do jogo',
    example: '34383012-5efb-4365-abb7-bf312c21cf1a'
  })
  genderId: string;

  @IsUUID(undefined, {each: true})
  @ApiProperty({
    description: 'Jogos',
    example: '76e27454-c3c4-4cc8-a15c-efa7540ef0e2',
  })
  games: createProfileGamesDto[]
}
