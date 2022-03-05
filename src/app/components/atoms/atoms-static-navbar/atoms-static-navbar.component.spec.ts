import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomsStaticNavbarComponent } from './atoms-static-navbar.component';

describe('AtomsStaticNavbarComponent', () => {
  let component: AtomsStaticNavbarComponent;
  let fixture: ComponentFixture<AtomsStaticNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomsStaticNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomsStaticNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
