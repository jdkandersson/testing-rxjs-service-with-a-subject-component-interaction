// sauce.service.spec.ts
import { cold } from 'jasmine-marbles';

import { SauceService } from './sauce.service';


describe('SauceService', () => {
  let service: SauceService;

  beforeEach(() => {
    service = new SauceService();
  });

  describe('construction', () => {
    it('should emit initial sauce', () => {
      // Setting up expected observable
      const expectedMarbles = 'a';
      const expected = cold(expectedMarbles, {a: 'initial sauce'});

      // Checking sauce$
      expect(service.sauce$()).toBeObservable(expected);
    });
  });

  describe('setSauce', () => {
    it('should emit new sauce', () => {
      // Defining marbles
      const setSauceCallMarbles = '-a';
      const expectedMarbles =     'bc';

      // Setting up setSauce call
      cold(setSauceCallMarbles, {a: 'new sauce'})
        .subscribe(sauce => service.setSauce(sauce));

      // Checking sauce$
      const expected = cold(expectedMarbles, {b: 'initial sauce', c: 'new sauce'});
      expect(service.sauce$()).toBeObservable(expected);
    });
  });
});
