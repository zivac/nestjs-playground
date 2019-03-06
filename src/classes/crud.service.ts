import { Repository, FindManyOptions, FindOneOptions, UpdateResult,
    FindConditions, SaveOptions, DeleteResult, RemoveOptions, DeepPartial } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class CrudService<T> {

    constructor(readonly repository: Repository<T>) {}

    async find(options?: FindManyOptions): Promise<T[]> {
        return await this.repository.find(options);
    }

    async findOne(id: number, options?: FindOneOptions): Promise<T> {
        return await this.repository.findOne(id, options);
    }

    async create(item: DeepPartial<T>): Promise<T> {
        return await this.repository.save(item);
    }

    async update(criteria: number | number[] | FindConditions<T>, data: QueryDeepPartialEntity<T>, options?: SaveOptions): Promise<UpdateResult> {
        return await this.repository.update(criteria, data, options);
    }

    async delete(criteria: number | number[] | FindConditions<T>, options?: RemoveOptions): Promise<DeleteResult> {
        return await this.repository.delete(criteria, options);
    }

}
