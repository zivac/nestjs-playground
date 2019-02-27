import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Cat } from './cat.entity';

@Entity()
export class Person {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

    @OneToMany(type => Cat, cat => cat.owner)
    cats: Cat[];

}