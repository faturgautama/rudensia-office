import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PembayaranInvoiceComponent } from './pembayaran-invoice.component';

describe('PembayaranInvoiceComponent', () => {
  let component: PembayaranInvoiceComponent;
  let fixture: ComponentFixture<PembayaranInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PembayaranInvoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PembayaranInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
