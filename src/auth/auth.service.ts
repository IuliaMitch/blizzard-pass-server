import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { loginResponseDto } from './dto/login-response.dto';
import { loginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(private readonly prisma: PrismaService,
    private readonly jwtService: JwtService) {}

  async login(loginDto: loginDto): Promise<loginResponseDto> {
    
    const {nickname, password} = loginDto

    const user = await this.prisma.user.findUnique({where: { nickname }})



    if(!user){
      throw new NotFoundException('Usuário ou senha inválidos')
    }
    
    const isHashValid = await bcrypt.compare(password, user.password)
    
    if(!isHashValid) {
      throw new UnauthorizedException('Usuário e/ou senha inválidos')
    }

    delete user.password


    return {
      token: this.jwtService.sign({ nickname }),
      user,
    }
  }
}
