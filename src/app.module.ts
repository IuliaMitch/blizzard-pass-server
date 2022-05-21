import { GenderModule } from './gender/gender.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [GenderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
