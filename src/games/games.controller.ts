import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('games')
@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  @ApiOperation({
    summary: "Criar um game"
  })
  create(@Body() dto: CreateGameDto) {
    return this.gamesService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: "Visualizar todos os games"
  })
  findAll() {
    return this.gamesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: "Visualizar um game por ID"
  })
  findOne(@Param('id') id: string) {
    return this.gamesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: "Editar um game por ID"
  })
  update(@Param('id') id: string, @Body() dto: UpdateGameDto) {
    return this.gamesService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary: "Deletar um game por ID"
  })
  delete(@Param('id') id: string) {
    return this.gamesService.delete(id);
  }
}
