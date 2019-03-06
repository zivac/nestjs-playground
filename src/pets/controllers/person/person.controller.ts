import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PersonService } from '../../../pets/services/person/person.service';
import { Person } from '../../../pets/entities/person.entity';
import { ApiUseTags } from '@nestjs/swagger';
@ApiUseTags('person')
@Controller('person')
export class PersonController {

    constructor(
        private person: PersonService
    ) { }

    @Get()
    async findAll(): Promise<Person[]> {
        return await this.person.find();
    }

    @Get('withCommon')
    async findWithCommon(): Promise<Person[]> {
        return await this.person.getOwnersWithCommonCats();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Person> {
        return await this.person.findOne(id);
    }

    @Post()
    async create(@Body() person: Person): Promise<Person> {
        return await this.person.create(person);
    }

    @Get('with/:breed')
    async findWithBreed(@Param('breed') breed: string): Promise<Person[]> {
        return await this.person.getOwnersWithCatBreed(breed);
    }

}
