import { Args, Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './types/taskType';
import { CreateTask } from './types/createTask';
import { UpdateTask } from './types/updateTask';
import { CreateSubTask } from './types/createSubTask';
import { AddMember } from './types/addMember';
import { SubTask } from './types/subTaskType';
import { Member } from './types/memberType';
import { UpdateSubTask } from './types/updateSubTask';
import { User } from 'src/user/user.type';

@Resolver()
export class TaskResolver {
    constructor(
        private readonly taskService: TaskService
    ) { }

    @Mutation(() => Task)
    createTask(
        @Args('createTask') createTask: CreateTask
    ) {
        return this.taskService.createTask(createTask);
    }

    @Mutation(() => Task)
    updateTask(
        @Args('id') id: string,
        @Args('updateTask') updateTask: UpdateTask
    ) {
        return this.taskService.updateTask(updateTask, id);
    }

    @Mutation(() => Task)
    deleteTask(
        @Args('id') id: string
    ) {
        return this.taskService.deleteTask(id);
    }

    @Mutation(() => Member)
    addMemberToTask(
        @Args('taskId') taskId: string,
        @Args('userId') userId: string
    ) {
        return this.taskService.addMemberToTask({ taskId, userId });
    }

    @Mutation(() => Member, { nullable: true })
    removeMemberFromTask(
        @Args('taskId') taskId: string,
        @Args('userId') userId: string
    ) {
        return this.taskService.removeMemberFromTask({ taskId, userId });
    }

    @Mutation(() => Task)
    createSubTask(
        @Args('createSubTask') createSubTask: CreateSubTask
    ) {
        return this.taskService.createSubTask(createSubTask);
    }

    @Mutation(() => Task)
    updateSubTask(
        @Args('subTaskId') subTaskId: string,
        @Args('updateSubTask') updateSubTask: UpdateSubTask
    ) {
        return this.taskService.updateSubTask(updateSubTask, subTaskId);
    }

    @Mutation(() => Task)
    deleteSubTask(
        @Args('subTaskId') subTaskId: string
    ) {
        return this.taskService.deleteSubTask(subTaskId);
    }

    @Query(() => [Task], { nullable: true })
    getTasks(
        @Args('userId') userId: string
    ) {
        return this.taskService.getUsersTasks(userId);
    }

    @Query(() => Task, { nullable: true })
    getTask(
        @Args('id') id: string
    ) {
        return this.taskService.getTask(id);
    }

    @Query(() => [Member])
    getMembers(
        @Args('taskId') taskId: string
    ) {
        return this.taskService.getMembers(taskId);
    }

    @Query(() => [SubTask])
    getSubTasks(
        @Args('taskId') taskId: string
    ) {
        return this.taskService.getSubTasks(taskId);
    }


}
