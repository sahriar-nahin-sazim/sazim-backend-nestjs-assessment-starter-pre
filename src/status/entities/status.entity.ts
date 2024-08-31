import { ObjectType, Field, Int } from "@nestjs/graphql";

@ObjectType()
export class Status {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  message: string;
}
