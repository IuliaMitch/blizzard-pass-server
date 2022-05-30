import { GenderModule } from './gender/gender.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GenderController } from './gender/gender.controller';
import { GenderService } from './gender/gender.service';
import { GamesModule } from './games/games.module';
import { GamesController } from './games/games.controller';
import { GamesService } from './games/games.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [GenderModule, PrismaModule, GamesModule, UserModule],
  controllers: [AppController, GenderController, GamesController],
  providers: [AppService, GenderService, GamesService],
})
export class AppModule {}
