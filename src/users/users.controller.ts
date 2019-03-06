import { Controller, Get, Body, Post, BadRequestException, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@ApiUseTags('users')
@Controller('users')
export class UsersController {
    constructor(
        private users: UsersService
    ) {}

    @Get()
    async find(): Promise<User[]> {
        try {
            return await this.users.find();
        } catch (err) {
            throw new BadRequestException();
        }
    }

    @Post()
    async create(@Body() user: any): Promise<User> {
        try {
            return await this.users.create(user);
        } catch (err) {
            if (err.routine === '_bt_check_unique') {
                throw new BadRequestException('Email must be unique');
            } else {
                throw new BadRequestException();
            }
        }
    }

}
