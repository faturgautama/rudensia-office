import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolCardLayoutComponent } from './mol-card-layout.component';

describe('MolCardLayoutComponent', () => {
  let component: MolCardLayoutComponent;
  let fixture: ComponentFixture<MolCardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolCardLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolCardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
