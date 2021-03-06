import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());


  const config = new DocumentBuilder()
  .setTitle('BlizzardPass')
  .setDescription('Aplicação para gestão de generos de um GamePass')
  .setVersion('1.0.0')
  .addTag('status')
  .addTag('gender')
  .addTag('games')
  .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document);

  await app.listen(3333);
}
bootstrap();
