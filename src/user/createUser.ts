import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateUser {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    @Field()
    email: string;

    @IsString()
    @IsNotEmpty()
    @Field()
    name: string;

    @IsString()
    @IsNotEmpty()
    @Field()
    password: string;
}