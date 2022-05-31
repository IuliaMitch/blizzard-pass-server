import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class createProfileGamesDto {
  @IsUUID()
  @ApiProperty({
    description: 'Id do jogo a ser adicionado no perfil',
    example: '76e27454-c3c4-4cc8-a15c-efa7540ef0e2',
  })
  gamesId: string;
}