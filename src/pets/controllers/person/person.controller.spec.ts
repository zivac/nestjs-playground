import { PersonController } from './person.controller';
import { PersonService } from '../../services/person/person.service';
import { Person } from '../../entities/person.entity';
import { MockRepository } from '../../../classes/mock.repository';

describe('Person Controller', () => {
  let controller: PersonController;
  let service: PersonService;

  beforeEach(async () => {
    service = new PersonService(new MockRepository<Person>());
    controller = new PersonController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
