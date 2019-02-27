import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PersonService } from '../../../pets/services/person/person.service';
import { Person } from '../../../pets/entities/person.entity';
import { DeepPartial } from 'typeorm';

@Controller('person')
export class PersonController {

    constructor(
        private person: PersonService,
    ) { }

    @Get()
    async findAll(): Promise<Person[]> {
        return await this.person.find();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Person> {
        return await this.person.findOne(id);
    }

    @Post()
    async create(@Body() person: DeepPartial<Person>): Promise<Person> {
        return await this.person.create(person);
    }

}
