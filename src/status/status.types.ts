import { ObjectType, Field } from "@nestjs/graphql";
import { HealthCheckResult, HealthCheckStatus, HealthIndicatorResult } from "@nestjs/terminus";

@ObjectType()
export class HealthCheckResultObject implements HealthCheckResult {
  @Field(() => String)
  status!: HealthCheckStatus;
  @Field(() => GraphQLHealthIndicatorObject, { nullable: true })
  info?: HealthIndicatorResult;
  @Field(() => GraphQLHealthIndicatorObject, { nullable: true })
  error?: HealthIndicatorResult;
  @Field(() => GraphQLHealthIndicatorObject)
  details!: HealthIndicatorResult;
}
@ObjectType()
class GraphQLHealthIndicatorResult {
  @Field(() => String)
  status!: string;
}

@ObjectType()
class GraphQLHealthIndicatorObject {
  @Field(() => GraphQLHealthIndicatorResult)
  database!: GraphQLHealthIndicatorResult;
}
