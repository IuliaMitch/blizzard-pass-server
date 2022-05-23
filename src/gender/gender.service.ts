/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './entities/gender.entity';

@Injectable()
export class GenderService {
  
    genders: Gender[] = []

    constructor(private readonly prisma: PrismaService) {}

    findAll(): Promise<Gender[]> {

        return this.prisma.gender.findMany();
    }

    findOne(id: string): Promise<Gender> {
        return this.prisma.gender.findUnique({
            where: {
                id,
            },
        });
    }

    create(dto: CreateGenderDto): Promise<Gender> {
        const data: Gender = { ...dto }
        
        
        return this.prisma.gender.create({ data }) ;
    }

    update(id: string, dto: UpdateGenderDto): Promise<Gender> {
       const data: Partial<Gender> = { ...dto };
       return this.prisma.gender.update({
           where: { id },
           data,
       })
    }

    async delete(id: string) {
        return await this.prisma.gender.delete({
            where: {
                id,
            }
        })
    }


}
