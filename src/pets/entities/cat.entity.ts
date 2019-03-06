import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Person } from './person.entity';

@Entity()
export class Cat {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column()
  age: number;

  @Column()
  breed: string;

  @ManyToOne(type => Person, owner => owner.cats)
  owner: Person;

}
