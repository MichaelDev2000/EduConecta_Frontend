import { TestBed } from '@angular/core/testing';

import { GruposServicesService } from './grupos-services.service';

describe('GruposServicesService', () => {
  let service: GruposServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GruposServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
