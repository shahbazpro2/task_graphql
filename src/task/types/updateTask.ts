import { Field, InputType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@InputType()
export class UpdateTask {

    @Field({ nullable: true })
    @IsOptional()
    title: string;

    @Field({ nullable: true })
    @IsOptional()
    content: string;

    @Field({ nullable: true })
    @IsOptional()
    status: string;

    @Field({ nullable: true })
    @IsOptional()
    dueDate?: string;

}
