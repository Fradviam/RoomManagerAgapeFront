import { TestBed } from '@angular/core/testing';

import { MeteorService } from './meteor.service';

describe('MeteorService', () => {
  let service: MeteorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeteorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
