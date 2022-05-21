/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { CreateGenderDto } from './dto/create-gender.dto';
import { Gender } from './entities/gender.entity';

@Injectable()
export class GenderService {

    genders: Gender[] = []

    findAll() {

        return this.genders
    }

    create(createGenderDto: CreateGenderDto) {
        const gender: Gender = {id: 'random_id', ...createGenderDto}
        
        this.genders.push(gender)
        
        return gender;
    }

}
