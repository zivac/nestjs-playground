import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { Repository } from 'typeorm';
import { Cat } from '../../entities/cat.entity';
import { MockRepository } from '../../../classes/mock.repository';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    service = new CatsService(new MockRepository<Cat>());
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});
