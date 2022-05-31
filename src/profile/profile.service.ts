import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'utils/handle-error.util';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {

  constructor(private readonly prisma: PrismaService) {}

  create(createProfileDto: CreateProfileDto) {
    const data: Prisma.ProfileCreateInput = {
      user: {
        connect: {
          id: createProfileDto.userId,
        }
      },
      title: createProfileDto.title,
      imageUrl: createProfileDto.imageUrl,
      games: {
        createMany: {
          data: createProfileDto.games.map((createProfileDto) => ({
            gamesId: createProfileDto.gamesId,
          })),
        },
      },
    }
    return this.prisma.profile
      .create({
        data,
        select: {
          id: true,
          title: true,
          imageUrl: true,
          user: {
            select: {
              name: true,
            },
          },
          games: {
            select: {
              games: true,
            },
          },
        },
      })
      .catch(handleError);


  }

  findAll() {
    return this.prisma.profile.findMany({
      select: {
        id: true,
        title: true,
        imageUrl: true,
        user: {
          select: {
            name: true,
          },
        },
        games: {
          select: {
            games: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.profile.findUnique({
      where: {id},
    });
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  delete(id: string) {
    return `This action removes a #${id} profile`;
  }
}
