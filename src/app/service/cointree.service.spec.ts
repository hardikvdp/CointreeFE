import { TestBed } from '@angular/core/testing';

import { CointreeService } from './cointree.service';

describe('CointreeService', () => {
  let service: CointreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CointreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
