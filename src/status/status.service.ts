import { Injectable } from "@nestjs/common";
import { HealthCheckService, PrismaHealthIndicator } from "@nestjs/terminus";
import { PrismaService } from "@/prisma/prisma.service";

@Injectable()
export class StatusService {
  constructor(
    private readonly health: HealthCheckService,
    private readonly prismaIndicator: PrismaHealthIndicator,
    private readonly prisma: PrismaService,
  ) {}

  status() {
    return this.health.check([() => this.prismaIndicator.pingCheck("database", this.prisma)]);
  }
}
