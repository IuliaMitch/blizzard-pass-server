import { GenderModule } from './gender/gender.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GenderController } from './gender/gender.controller';
import { GenderService } from './gender/gender.service';
import { GamesModule } from './games/games.module';

@Module({
  imports: [GenderModule, PrismaModule, GamesModule],
  controllers: [AppController, GenderController],
  providers: [AppService, GenderService],
})
export class AppModule {}
