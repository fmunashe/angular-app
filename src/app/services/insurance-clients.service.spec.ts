import { TestBed } from '@angular/core/testing';

import { InsuranceClientsService } from './insurance-clients.service';

describe('InsuranceClientsService', () => {
  let service: InsuranceClientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsuranceClientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
