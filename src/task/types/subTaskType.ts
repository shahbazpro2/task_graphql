import { Field, ObjectType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@ObjectType()
export class SubTask {
    @Field()
    id: string;

    @Field()
    title: string;

    @Field()
    content: string;

    @Field()
    status: string;

    @Field({ nullable: true })
    @IsOptional()
    dueDate?: Date;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;


}
