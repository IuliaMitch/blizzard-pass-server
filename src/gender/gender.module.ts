import { GenderController } from './gender.controller';
import { GenderService } from './gender.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GenderController],
  providers: [GenderService],
})
export class GenderModule {}
