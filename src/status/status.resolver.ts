import { Resolver, Query } from "@nestjs/graphql";
import { StatusService } from "./status.service";
@Resolver()
export class StatusResolver {
  constructor(private readonly statusService: StatusService) {}

  @Query(() => String, { name: "status" })
  status() {
    return this.statusService.status();
  }
}
