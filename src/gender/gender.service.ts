/*
https://docs.nestjs.com/providers#services
*/

import {
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'utils/handle-error.util';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './entities/gender.entity';


@Injectable()
export class GenderService {
  genders: Gender[] = [];

  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Gender[]> {
    return this.prisma.gender.findMany();
  }

  async findById(id: string): Promise<Gender> {
    const record = await this.prisma.gender.findUnique({
      where: {
        id,
      },
    });

    if (!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado`);
    }
    return record;
  }

  async findOne(id: string): Promise<Gender> {
    return this.findById(id);
  }

  async create(dto: CreateGenderDto): Promise<Gender> {
    const data: Prisma.GenderCreateInput = {
      name: dto.name,
      gamesGender: {
        connect: {
          title: dto.name
        }
      }
     };

    return this.prisma.gender.create({ data }).catch(handleError);
  }

  async update(id: string, dto: UpdateGenderDto): Promise<Gender> {
    await this.findById(id);
    const data: Prisma.GenderUpdateInput = {
      name: dto.name
     };
    return this.prisma.gender
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async delete(id: string) {
    await this.findById(id);

    await this.prisma.gender.delete({
      where: {
        id,
      },
    });
  }

}
