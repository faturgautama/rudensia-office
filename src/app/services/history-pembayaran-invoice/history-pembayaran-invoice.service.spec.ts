import { TestBed } from '@angular/core/testing';

import { HistoryPembayaranInvoiceService } from './history-pembayaran-invoice.service';

describe('HistoryPembayaranInvoiceService', () => {
  let service: HistoryPembayaranInvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryPembayaranInvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
