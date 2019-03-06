import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CrudService } from '../classes/crud.service';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService extends CrudService<User> {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {
        super(usersRepository);
    }

    async findOneByEmail(email: string): Promise<User> {
        return this.usersRepository.createQueryBuilder('user').where({email}).getOne();
    }

}
