import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolSectionHeaderComponent } from './mol-section-header.component';

describe('MolSectionHeaderComponent', () => {
  let component: MolSectionHeaderComponent;
  let fixture: ComponentFixture<MolSectionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MolSectionHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MolSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
