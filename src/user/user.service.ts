import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

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

  create(createUserDto: CreateUserDto) {
    const data: User = {...createUserDto}
    return this.prisma.user.create({ data });
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  delete(id: string) {
    return `This action removes a #${id} user`;
  }
}
