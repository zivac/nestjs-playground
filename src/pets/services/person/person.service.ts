import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Person } from '../../entities/person.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from '../../../classes/crud.service';

@Injectable()
export class PersonService extends CrudService<Person> {

    constructor(
        @InjectRepository(Person)
        private readonly personRepository: Repository<Person>,
    ) {
        super(personRepository);
    }

    async findOne(id: number): Promise<Person> {
        return await super.findOne(id, {relations: ['cats']});
    }

}
