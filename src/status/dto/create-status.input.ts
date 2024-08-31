import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateStatusInput {
  @Field(() => String)
  message: string;
}
