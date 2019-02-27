import { PersonService } from './person.service';
import { MockRepository } from '../../../classes/mock.repository';
import { Person } from '../../entities/person.entity';

describe('PersonService', () => {
  let service: PersonService;

  beforeEach(async () => {
    service = new PersonService(new MockRepository<Person>());
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
