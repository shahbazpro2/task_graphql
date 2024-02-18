import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUser } from './createUser';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UserService {

    constructor(
        private readonly prismaService: PrismaService
    ) { }

    async createUser(payload: CreateUser) {
        const isExist = await this.prismaService.user.findUnique({
            where: {
                email: payload.email
            }
        });
        if (isExist) {
            throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);
        }
        return this.prismaService.user.create({
            data: payload
        });
    }

    async loginUser(email: string, password: string) {
        const user = await this.prismaService.user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        if (user.password !== password) {
            throw new HttpException('Password is incorrect', HttpStatus.BAD_REQUEST);
        }
        return user;
    }

    async getUser(id: string) {
        return this.prismaService.user.findUnique({
            where: {
                id
            }
        });
    }

    async getUsers() {
        return this.prismaService.user.findMany();
    }
}
