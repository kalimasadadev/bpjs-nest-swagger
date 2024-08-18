import { NestFactory } from '@nestjs/core';
import { SwaggerModule,DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const docbuilder = new DocumentBuilder()
    .setTitle("BPJS API V2")
    .setDescription("BPJS API BRIDGING INDONESIA HEALTH CARE")
    .setVersion("1.0.0")
    // .addTag("bpjs")
    // .addBearerAuth({
    //   name: 'Authorization',
    //   type: 'http',
    //   in: 'Header',
    //   scheme: 'Bearer',
    //   bearerFormat: 'Bearer',
    // },'access-token')
    .build();
  
  // swagger
  const document = SwaggerModule.createDocument(app, docbuilder);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000);
}
bootstrap();
