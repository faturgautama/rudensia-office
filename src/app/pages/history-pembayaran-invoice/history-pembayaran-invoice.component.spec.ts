import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPembayaranInvoiceComponent } from './history-pembayaran-invoice.component';

describe('HistoryPembayaranInvoiceComponent', () => {
  let component: HistoryPembayaranInvoiceComponent;
  let fixture: ComponentFixture<HistoryPembayaranInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryPembayaranInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPembayaranInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
