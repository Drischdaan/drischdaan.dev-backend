import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { IAppConfig } from './app.config';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger: Logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get<ConfigService>(ConfigService);
  const appConfig: IAppConfig = config.get<IAppConfig>('app');

  app.enableCors();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  await app.listen(appConfig.port);
  logger.log(`🚀 Application listening on port ${appConfig.port}`);
}
bootstrap();
