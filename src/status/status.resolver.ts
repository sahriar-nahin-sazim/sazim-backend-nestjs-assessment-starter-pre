import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { StatusService } from "./status.service";
import { Status } from "./entities/status.entity";
import { CreateStatusInput } from "./dto/create-status.input";

@Resolver(() => Status)
export class StatusResolver {
  constructor(private readonly statusService: StatusService) {}

  @Mutation(() => Status)
  createStatus(@Args("createStatusInput") createStatusInput: CreateStatusInput) {
    return this.statusService.create(createStatusInput);
  }

  @Query(() => [Status], { name: "status" })
  findAll() {
    return this.statusService.findAll();
  }

  @Query(() => Status, { name: "status" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.statusService.findOne(id);
  }
}
