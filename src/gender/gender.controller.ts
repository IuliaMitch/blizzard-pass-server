/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Gender } from './entities/gender.entity';
import { GenderService } from './gender.service';

@ApiTags()
@Controller('gender')
export class GenderController {
    constructor(private genderService: GenderService) {}

    @Get()
    @ApiOperation({
        summary: 'Listar todos os generos'
    })
    findAll(): Promise<Gender[]> {
        return this.genderService.findAll();
        
    }

    @Get(':id')
    @ApiOperation({
        summary: 'Visualizar um genero'
    })
    findOne(@Param('id') id: string): Promise<Gender> {
        return this.genderService.findOne(id)
    }

    @Post()
    @ApiOperation({
        summary: 'Criar um genero'
    })
    create(@Body() dto: CreateGenderDto): Promise<Gender> {
        return this.genderService.create(dto);

    }

    @Patch(':id')
    @ApiOperation({
        summary: 'Editar um genero por ID'
    })
    update(@Param('id') id: string, @Body() dto: UpdateGenderDto): Promise<Gender> {
        return this.genderService.update(id, dto)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    @ApiOperation({
        summary: 'Deletar um genero por ID'
    })
    delete(@Param('id') id: string) {
        this.genderService.delete(id)
    }

}
