import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { loginResponseDto } from './dto/login-response.dto';
import { loginDto } from './dto/login.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Realizar login, recebendo um token de autenticação'
  })
  login(@Body() loginDto: loginDto): Promise<loginResponseDto> {
    return this.authService.login(loginDto)
  }


}
