import { TestBed } from '@angular/core/testing';

import { TrafficRestService } from './traffic-rest.service';

describe('TrafficRestService', () => {
  let service: TrafficRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrafficRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
