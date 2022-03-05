import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceAirComponent } from './invoice-air.component';

describe('InvoiceAirComponent', () => {
  let component: InvoiceAirComponent;
  let fixture: ComponentFixture<InvoiceAirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceAirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceAirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
