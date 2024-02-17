import { Field, ObjectType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { User } from "src/user/user.type";
import { Member } from "./memberType";
import { SubTask } from "./subTaskType";

@ObjectType()
export class Task {
    @Field()
    id: string;

    @Field()
    title: string;

    @Field()
    content: string;

    @Field()
    status: string;

    @Field()
    creatorId: User;

    @Field({ nullable: true })
    @IsOptional()
    dueDate?: Date;

    @Field(() => [Member], { nullable: true })
    @IsOptional()
    members?: Member[];

    @Field(() => [SubTask], { nullable: true })
    @IsOptional()
    subTasks?: SubTask[];

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;


}
