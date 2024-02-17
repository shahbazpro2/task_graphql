import { Field, InputType } from "@nestjs/graphql";
import { User } from "@prisma/client";
import { IsArray, IsOptional, IsString } from "class-validator";

@InputType()
export class CreateTask {

    @Field()
    @IsString()
    title: string;

    @Field()
    @IsString()
    creatorId: string;


}