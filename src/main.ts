import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { getAllowedMethods, getCorsConfig } from "./common/config/cors.config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);

  app.enableCors({
    methods: getAllowedMethods(),
    ...getCorsConfig(),
  });
}
bootstrap();
