import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'utils/handle-error.util';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<Profile> {
    const record = await this.prisma.profile.findUnique({
      where: { id },
      include: { games: true },
    });

    if (!record) {
      throw new NotFoundException("Registro com o Id '${id}' não encontrado.");
    }

    return record;
  }

  async create(createProfileDto: CreateProfileDto) {
    const data: Prisma.ProfileCreateInput = {
      user: {
        connect: {
          id: createProfileDto.userId,
        },
      },
      title: createProfileDto.title,
      imageUrl: createProfileDto.imageUrl,
      genders: {
        connect: {
          name: createProfileDto.genderName
        }
      }
    };

    return await this.prisma.profile
      .create({
        data,
        select: {
          id: true,
          title: true,
          imageUrl: true,
          user: true,
        },
      })
      .catch(handleError);
  }

  findAll() {
    return this.prisma.profile.findMany({
      include: {
        user: true,
        games: true,
      },
    });
  }

  findOne(id: string) {
    return this.findById(id);
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    const data: Prisma.ProfileUpdateInput = {
      title: updateProfileDto.title,
      imageUrl: updateProfileDto.imageUrl,
      user: {
        connect: {
          id: updateProfileDto.userId,
        },
      },
      games: {
        connect: {
          id: updateProfileDto.gamesId,
        },
      },
      genders: {
        connect: {
          name: updateProfileDto.genderName,
        },
      },
    };
    return this.prisma.profile.update({
      where: { id },
      data,
    });
  }

  async delete(id: string) {
    await this.findById(id);
    return this.prisma.profile.delete({ where: { id } });
  }
}
