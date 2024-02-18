import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTask } from './types/createTask';
import { UpdateTask } from './types/updateTask';
import { AddMember } from './types/addMember';
import { CreateSubTask } from './types/createSubTask';
import { UpdateSubTask } from './types/updateSubTask';

@Injectable()
export class TaskService {
    constructor(
        private readonly prismaService: PrismaService
    ) { }

    async createTask(payload: CreateTask) {
        return this.prismaService.task.create({
            data: payload
        });
    }

    async updateTask(payload: UpdateTask, id: string) {
        return this.prismaService.task.update({
            where: { id },
            data: payload
        });
    }


    async getTask(id: string) {
        return this.prismaService.task.findUnique({
            where: { id },
            include: {
                members: {
                    include: {
                        user: true
                    }
                },
                creator: true
            }
        });
    }

    async deleteTask(id: string) {
        return this.prismaService.task.delete({
            where: { id }
        });
    }

    async getUsersTasks(userId: string) {
        const records = await this.prismaService.task.findMany({
            where: {
                OR: [
                    {
                        creatorId: userId
                    },
                    {
                        members: {
                            some: {
                                userId
                            }
                        }
                    }
                ]
            },
            orderBy: {
                createdAt: 'asc'
            },
            include: {
                members: {
                    include: {
                        user: true
                    }
                },
                creator: true

            }
        })
        console.log(records)
        return records
    }

    async addMemberToTask(payload: AddMember) {
        const { taskId, userId } = payload;
        const isAlreadyExist = await this.prismaService.member.findFirst({
            where: {
                taskId,
                userId
            }
        })
        if (isAlreadyExist) {
            return isAlreadyExist;
        }
        return this.prismaService.member.create({
            data: {
                taskId,
                userId
            }
        })
    }

    async removeMemberFromTask(payload: AddMember) {
        const { taskId, userId } = payload;
        return this.prismaService.member.deleteMany({
            where: {
                taskId,
                userId
            }
        })
    }

    async getMembers(taskId: string) {
        return this.prismaService.member.findMany({
            where: {
                taskId
            }
        });
    }

    async createSubTask(payload: CreateSubTask) {
        return this.prismaService.subTask.create({
            data: payload
        });
    }

    async updateSubTask(payload: UpdateSubTask, subTaskId: string) {
        return this.prismaService.subTask.update({
            where: { id: subTaskId },
            data: payload
        });
    }

    async getSubTasks(taskId: string) {
        return this.prismaService.subTask.findMany({
            where: {
                taskId
            },
            orderBy: {
                createdAt: 'desc'
            }
        });
    }

    async deleteSubTask(id: string) {
        return this.prismaService.subTask.delete({
            where: { id }
        });
    }

}
