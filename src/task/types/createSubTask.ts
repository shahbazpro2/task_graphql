import { Field, InputType } from "@nestjs/graphql";
import { IsOptional, IsString } from "class-validator";

@InputType()
export class CreateSubTask {

    @Field()
    @IsString()
    taskId: string;


    @Field()
    @IsString()
    title: string;



    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    content: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    status: string;

    @Field({ nullable: true })
    @IsString()
    @IsOptional()
    dueDate?: Date;

}
