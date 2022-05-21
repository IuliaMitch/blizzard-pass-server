import { ApiProperty } from "@nestjs/swagger";
import { IsPositive, IsString } from "class-validator";

export class CreateGenderDto {
  @IsString()
  @ApiProperty({
    description: 'O nome do gênero',
    example: 'MMORPG',

  })
    name: string;
  }