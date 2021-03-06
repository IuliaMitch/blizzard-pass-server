import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Game } from './entities/game.entity';

@Injectable()
export class GamesService {
  games: Game[] = [];

  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<Game> {
    const record = await this.prisma.games.findUnique({
      where: {
        id,
      },
    });

    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }
    return record;
  }

  async create(dto: CreateGameDto): Promise<Game> {

    const data: Game = { ...dto };
    console.log(data)
    return this.prisma.games.create({ data }).catch(this.handleError);
  }

  findAll(): Promise<Game[]> {
    return this.prisma.games.findMany();
  }

  async findOne(id: string): Promise<Game> {
    await this.findById(id)
    return this.prisma.games.findUnique({ where: { id } });
  }

  async update(id: string, dto: UpdateGameDto): Promise<Game> {
    await this.findById(id)
    const data: Partial<Game> = { ...dto };
    return this.prisma.games.update({
      where: {
        id,
      },
      data,
    }).catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id)
    await this.prisma.games.delete({ where: {
      id
    }
  })
  }
  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();
    throw new UnprocessableEntityException(
      lastErrorLine || 'Ocorreu algum erro ao executar a operação',
    );
  }
}
