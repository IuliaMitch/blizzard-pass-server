/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-gender-dto';

@Injectable()
export class GenderService {

    findAll() {
        return 'Buscar todas as mesas'
    }

    create(createTableDto: CreateTableDto) {
        return 'Criar uma mesa' + JSON.stringify(createTableDto)
    }

}
