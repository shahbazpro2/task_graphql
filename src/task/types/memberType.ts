import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Member {
    @Field({ nullable: true })
    id: string;

    @Field({ nullable: true })
    userId: string;

    @Field({ nullable: true })
    taskId: string;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}