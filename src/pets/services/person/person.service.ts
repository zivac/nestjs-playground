import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Person } from '../../entities/person.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CrudService } from '../../../classes/crud.service';
import { Cat } from '../../entities/cat.entity';

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

    async getOwnersWithCatBreed(breed: string): Promise<Person[]> {
        const qb = this.personRepository.createQueryBuilder('person')
        .leftJoinAndSelect('person.cats', 'cat')
        .where('cat.breed = :breed', { breed });
        return qb.getMany();
    }

    async getOwnersWithCommonCats(): Promise<Person[]> {
        let qb = this.personRepository.createQueryBuilder('person');
        qb = qb.leftJoinAndSelect('person.cats', 'cat')
        .where(q => {
            const subquery1 = q.subQuery().select('COUNT(*)').from(Cat, 'c').where('c.breed = ct.breed').getQuery();
            const subquery2 = q.subQuery().select('breed').from(Cat, 'ct').where(`${subquery1} > 1`).getQuery();
            return `cat.breed IN ${subquery2}`;
        });
        return qb.getMany();
    }

}
