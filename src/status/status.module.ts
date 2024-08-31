import { Module } from "@nestjs/common";
import { StatusService } from "./status.service";
import { StatusResolver } from "./status.resolver";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  imports: [],
  providers: [StatusResolver, StatusService],
})
export class StatusModule {}
