import { TestBed } from '@angular/core/testing';

import { DropDoenService } from './drop-doen.service';

describe('DropDoenService', () => {
  let service: DropDoenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropDoenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
