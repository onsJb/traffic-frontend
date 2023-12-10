import { TestBed } from '@angular/core/testing';

import { TrafficSoapService } from './traffic-soap.service';

describe('TrafficSoapService', () => {
  let service: TrafficSoapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrafficSoapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
