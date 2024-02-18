import { Field, ObjectType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@ObjectType()
export class User {
    @Field({ nullable: true })
    @IsOptional()
    id: string;

    @Field({ nullable: true })
    @IsOptional()
    email: string;

    @Field({ nullable: true })
    @IsOptional()
    name: string;

    @Field({ nullable: true })
    @IsOptional()
    password: string;

    @Field({ nullable: true })
    createdAt?: Date;

    @Field({ nullable: true })
    updatedAt?: Date;
}