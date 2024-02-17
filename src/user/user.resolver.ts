import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUser } from './createUser';
import { UserService } from './user.service';
import { User } from './user.type';

@Resolver()
export class UserResolver {
    constructor(
        private readonly userService: UserService
    ) { }

    @Mutation(() => User)
    createUser(
        @Args('createUser') createUser: CreateUser
    ) {
        return this.userService.createUser(createUser)
    }

    @Query(() => User, { nullable: true })
    getUser(
        @Args('id') id: string
    ) {
        return this.userService.getUser(id);
    }

    @Query(() => [User], { nullable: true })
    getUsers() {
        return this.userService.getUsers();
    }

}
