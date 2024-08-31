import { Module } from "@nestjs/common";
import { PrismaModule } from "./prisma/prisma.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { StatusModule } from './status/status.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
    }),
    PrismaModule,
    StatusModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
