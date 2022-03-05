import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomErrorAlertComponent } from './atom-error-alert.component';

describe('AtomErrorAlertComponent', () => {
  let component: AtomErrorAlertComponent;
  let fixture: ComponentFixture<AtomErrorAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomErrorAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomErrorAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
