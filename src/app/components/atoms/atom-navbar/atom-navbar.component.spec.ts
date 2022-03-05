import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomNavbarComponent } from './atom-navbar.component';

describe('AtomNavbarComponent', () => {
  let component: AtomNavbarComponent;
  let fixture: ComponentFixture<AtomNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
