import { ApiOperation, ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateGameDto {
  @IsString()
  @ApiProperty({
    description: 'Título do Game',
    example: 'Diablo 3'
  })

  title: string;

  @IsString()
  @ApiProperty({
    description: 'Descrição do Game',
    example: 'Diablo III é um RPG de ação hack and slash desenvolvido pela Blizzard Entertainment, o terceiro título da série Diablo.'
  })

  description: string;

  @IsNumber()
  @ApiProperty({
    description: 'Ano em que foi lançado',
    example: 2012
  })
  year: number;

  @IsNumber()
  @ApiProperty({
    description: 'Pontuação do Game secundo IMB',
    example: 5
  })
  imdbScore: number;

  @IsString()
  @ApiProperty({
    description: 'Link do trailer do Youtube',
    example: 'https://www.youtube.com/watch?v=aaCZGs0PeLs&ab_channel=Pedroca'
  })
  trailerYoutubeUrl: string;

  @IsString()
  @ApiProperty({
    description: "Link de uma Gameplay no Youtube",
    example: 'https://www.youtube.com/watch?v=PCQ6_D9_KLc&ab_channel=Livesdoalanzoka'
    
  })
  gameplayYoutubeUrl: string;

  @IsString()
  @ApiProperty({
    description: 'Poster do Game',
    example: "https://upload.wikimedia.org/wikipedia/pt/1/12/DiabloIIIcover.jpg"
  })
  coverImageUrl: string;
}
