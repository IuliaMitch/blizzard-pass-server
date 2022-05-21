/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateGenderDto } from './dto/create-gender.dto';
import { GenderService } from './gender.service';

@ApiTags()
@Controller('gender')
export class GenderController {
    constructor(private genderService: GenderService) {}

    @Get()
    findAll() {
        return this.genderService.findAll();
        
    }

    @Post()
    create(@Body() createGenderDto: CreateGenderDto) {
        return this.genderService.create(createGenderDto);

    }

}
