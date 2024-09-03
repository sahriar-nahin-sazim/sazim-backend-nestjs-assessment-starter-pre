import { Resolver, Query } from "@nestjs/graphql";
import { StatusService } from "./status.service";
import { HealthCheckResultObject } from "./status.types";
@Resolver()
export class StatusResolver {
  constructor(private readonly statusService: StatusService) {}

  @Query(() => HealthCheckResultObject, { name: "status" })
  status(): Promise<HealthCheckResultObject> {
    return this.statusService.status();
  }
}
