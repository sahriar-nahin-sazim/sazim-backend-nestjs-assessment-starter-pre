import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { StatusService } from "./status.service";
import { Status } from "./entities/status.entity";
import { CreateStatusDto } from "./dto/create-status.dtos";

@Resolver(() => Status)
export class StatusResolver {
  constructor(private readonly statusService: StatusService) {}

  @Query(() => String, { name: "status" })
  status() {
    return this.statusService.status();
  }

  @Mutation(() => Status)
  createStatus(@Args("createStatusDto") createStatusDto: CreateStatusDto) {
    return this.statusService.create(createStatusDto);
  }
}
