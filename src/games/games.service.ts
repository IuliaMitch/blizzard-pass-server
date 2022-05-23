import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Game } from './entities/game.entity';

@Injectable()
export class GamesService {
  games: Game[] = [];

  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateGameDto): Promise<Game> {
    const data: Game = { ...dto };
    return this.prisma.games.create(data);
  }

  findAll(): Promise<Game[]> {
    return this.prisma.games.findMany();
  }

  findOne(id: string): Promise<Game> {
    return this.prisma.games.findUnique({ where: { id } });
  }

  async update(id: string, dto: UpdateGameDto): Promise<Game> {
    const data: Game = { ...dto };
    return this.prisma.games.update({
      where: {
        id,
      },
      data,
    });
  }

  delete(id: string) {
    return `This action removes a #${id} game`;
  }
}
