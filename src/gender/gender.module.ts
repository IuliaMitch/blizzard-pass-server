import { GenderController } from './gender.controller';
import { GenderService } from './gender.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [GenderController],
  providers: [GenderService],
})
export class GenderModule {}
