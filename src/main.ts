import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { getAllowedMethods, getCorsConfig } from "./common/config/cors.config";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors({
    methods: getAllowedMethods(),
    ...getCorsConfig(),
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
