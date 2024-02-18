import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/user.type";

@ObjectType()
export class Member {
    @Field({ nullable: true })
    id: string;

    @Field(() => User, { nullable: true })
    userId: User;

    @Field({ nullable: true })
    taskId: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}