import { Injectable, NotFoundException, UnprocessableEntityException } from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Game } from './entities/game.entity';
import { handleError } from 'utils/handle-error.util';
import { Prisma } from '@prisma/client';

@Injectable()
export class GamesService {
  games: Game[] = [];

  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<Game> {
    const record = await this.prisma.games.findUnique({
      where: { id },
      include: {
        genders: {
          select: {
            name: true,
          }
        }
      }
     });

    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }
    return record;
  }

  async create(dto: CreateGameDto): Promise<Game> {
    const data: Prisma.GamesCreateInput = {
      title: dto.title,
      coverImageUrl: dto.coverImageUrl,
      year: dto.year,
      description: dto.description,
      imdbScore: dto.imdbScore,
      gameplayYoutubeUrl: dto.gameplayYoutubeUrl,
      trailerYoutubeUrl: dto.trailerYoutubeUrl,
      genders: {
        connect: {
          id: dto.genreGame
        }
      }
    };
    return await this.prisma.games.create({
      data,
      include: {
        genders: true
      }
     }).catch(handleError);
  }

  findAll(): Promise<Game[]> {
    return this.prisma.games.findMany({
      select: {
        id: true,
        title: true,
        coverImageUrl: true,
        description: true,
        year: true,
        imdbScore: true,
        trailerYoutubeUrl: true,
        gameplayYoutubeUrl: true,
        genders: {
          select: {
            name: true,
          }
        }
      }
    });
  }

  async findOne(id: string): Promise<Game> {
    await this.findById(id)
    return this.prisma.games.findUnique({ where: { id } });
  }

  async update(id: string, dto: UpdateGameDto): Promise<Game> {
    const actualGame = await this.findById(id)
    const data: Prisma.GamesUpdateInput = {
      title: dto.title,
      coverImageUrl: dto.coverImageUrl,
      description: dto.description,
      gameplayYoutubeUrl: dto.gameplayYoutubeUrl,
      year: dto.year,
      imdbScore: dto.imdbScore,
      trailerYoutubeUrl: dto.trailerYoutubeUrl,
      genders: {
        disconnect: {
          id: actualGame.gender[0].id
        },
        connect: {
          id: dto.genreGame
          
        }
      }
     };
    return this.prisma.games.update({
      where: {
        id,
      },
      data,
      include: {
        genders: true
      }
    }).catch(handleError);
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
