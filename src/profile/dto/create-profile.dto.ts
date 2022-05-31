import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString, IsUrl, IsUUID, ValidateNested } from "class-validator";
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

 
  @ApiProperty({
    description: 'Gênero do jogo',
    example: 'MMORPG'
  })
  genderName: string;

  @ValidateNested({
    each: true
  })
  @Type(() => createProfileGamesDto)
  @ApiProperty({
    description: 'Id do jogo a ser adicionado no perfil',
    example: 'fbe611b7-34b1-4739-8b9e-418765b69942',
  })
  gamesId: string
}
