import { Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";

@InputType()
export class AddMember {
    @Field()
    @IsString()
    taskId: string;

    @Field()
    @IsString()
    userId: string;
}