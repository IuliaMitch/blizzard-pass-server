import { Injectable } from '@nestjs/common';
import { loginResponseDto } from './dto/login-response.dto';
import { loginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  async login(loginDto: loginDto): Promise<loginResponseDto> {
    return {
      token: 'teste',
      user: undefined
    }
  }
}
