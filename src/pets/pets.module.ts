import { Module } from '@nestjs/common';
import { CatsController } from './controllers/cats/cats.controller';
import { CatsService } from './services/cats/cats.service';
import { Cat } from './entities/cat.entity';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { PersonController } from './controllers/person/person.controller';
import { PersonService } from './services/person/person.service';
import { Person } from './entities/person.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([Cat, Person]),
    ],
    controllers: [
        CatsController,
        PersonController,
    ],
    providers: [
        CatsService,
        PersonService,
    ],
})
export class PetsModule {}
