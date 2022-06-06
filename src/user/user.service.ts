import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt'
import { domainToASCII } from 'url';
import { handleError } from 'utils/handle-error.util';


@Injectable()
export class UserService {
  private userSelect = {
    id: true,
    name: true,
    nickname: true,
    email: true,
    password: false,
    cpf: true,
    isAdmin: false,
  }

  constructor(private readonly prisma: PrismaService) {}


  findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      select: this.userSelect,
    });
  }

  async findById(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({
      where: {
        id,
      },
      select: this.userSelect,
    });

    if(!record) {
      throw new NotFoundException(`Registro com o ID '${id}' não encontrado.`)

    }

    return record;
  }

  async create(createUserDto: CreateUserDto) {
    if(createUserDto.password != createUserDto.confirmPassword) {
      throw new BadRequestException('As senhas informadas não são iguais')
    }

    delete createUserDto.confirmPassword


    const data: User = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10)
    }
    return this.prisma.user.create({ data });
  }

  

  findOne(id: string) {

  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.findById(id)

    if(dto.password) {
      if(dto.password != dto.confirmPassword){
        throw new BadRequestException('As senhas informadas devem ser iguais!')
      }

    }



    delete dto.confirmPassword;

    const data: Partial<User> = {
      ...dto
    }

    if(data.password){
      data.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.user.update({
      where: {
        id
      },
      data,
      select: this.userSelect,
    }).catch(handleError);
  }

  delete(id: string) {
    return `This action removes a #${id} user`;
  }
}
