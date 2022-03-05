import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolCardComponent } from './mol-card.component';

describe('MolCardComponent', () => {
  let component: MolCardComponent;
  let fixture: ComponentFixture<MolCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
