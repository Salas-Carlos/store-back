import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,      // elimina propiedades no definidas en el DTO
    forbidNonWhitelisted: true, // lanza error si se recibe una propiedad no permitida
    transform: true        // transforma el payload a una instancia del DTO
  }));

  await app.listen(process.env.APP_PORT, async () => console.log(`RUNNING PORT: ${await app.getUrl()}`));
}
bootstrap();
