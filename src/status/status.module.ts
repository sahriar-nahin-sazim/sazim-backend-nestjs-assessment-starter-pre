import { Module } from "@nestjs/common";
import { StatusService } from "./status.service";
import { StatusResolver } from "./status.resolver";
import { TerminusModule } from "@nestjs/terminus";

@Module({
  imports: [TerminusModule],
  providers: [StatusResolver, StatusService],
})
export class StatusModule {}
