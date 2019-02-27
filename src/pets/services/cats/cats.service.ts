import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult } from 'typeorm';
import { Cat } from '../../entities/cat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from '../../../classes/crud.service';

@Injectable()
export class CatsService extends CrudService<Cat> {

    constructor(
        @InjectRepository(Cat)
        private readonly catRepository: Repository<Cat>,
    ) {
        super(catRepository);
    }

    async find(): Promise<Cat[]> {
        return await super.find({relations: ['owner']});
    }

    async setOwner(catId: number, personId: number): Promise<UpdateResult> {
        return await this.catRepository.update(catId, {owner: {id: personId}});
    }

}
