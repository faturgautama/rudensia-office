import { TestBed } from '@angular/core/testing';

import { InvoiceAirService } from './invoice-air.service';

describe('InvoiceAirService', () => {
  let service: InvoiceAirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceAirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
