import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CatsService } from '../../services/cats/cats.service';
import { Cat } from '../../entities/cat.entity';
import { CreateCatDto } from '../../dto/create-cat.dto';
import { UpdateResult } from 'typeorm';

@Controller('cats')
export class CatsController {

    constructor(
        private cats: CatsService,
    ) {}

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.cats.find();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Cat> {
        return this.cats.findOne(id);
    }

    @Post()
    async createCat(@Body() cat: CreateCatDto): Promise<Cat> {
        return this.cats.create(cat);
    }

    @Post('adopt')
    async adoptCat(@Body('person') person: number, @Body('cat') cat: number): Promise<UpdateResult> {
        return this.cats.setOwner(cat, person);
    }

}
