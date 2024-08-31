import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { StatusService } from "./status.service";
import { Status } from "./entities/status.entity";
import { CreateStatusDto } from "./dto/create-status.dtos";

@Resolver(() => Status)
export class StatusResolver {
  constructor(private readonly statusService: StatusService) {}

  @Query(() => String, { name: "healthCheck" })
  status() {
    return this.statusService.status();
  }

  @Mutation(() => Status)
  createStatus(@Args("createStatusDto") createStatusDto: CreateStatusDto) {
    return this.statusService.create(createStatusDto);
  }

  @Query(() => [Status], { name: "allStatus" })
  findAll() {
    return this.statusService.findAll();
  }

  @Query(() => Status, { name: "status" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.statusService.findOne(id);
  }
}
