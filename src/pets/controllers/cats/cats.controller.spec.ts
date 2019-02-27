import { CatsController } from './cats.controller';
import { Cat } from '../../entities/cat.entity';
import { MockRepository } from '../../../classes/mock.repository';
import { CatsService } from '../../services/cats/cats.service';

describe('Cats Controller', () => {
  let controller: CatsController;
  let service: CatsService;

  beforeEach(async () => {
    service = new CatsService(new MockRepository<Cat>());
    controller = new CatsController(service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = [new Cat()];
      jest.spyOn(service, 'find').mockImplementation(async () => result);

      expect(await controller.findAll()).toBe(result);
    });
  });

});
