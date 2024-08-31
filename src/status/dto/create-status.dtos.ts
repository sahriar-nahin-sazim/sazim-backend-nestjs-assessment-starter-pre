import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateStatusDto {
  @Field(() => String)
  message: string;
}
