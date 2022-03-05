import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomButtonAbuComponent } from './atom-button-abu.component';

describe('AtomButtonAbuComponent', () => {
  let component: AtomButtonAbuComponent;
  let fixture: ComponentFixture<AtomButtonAbuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomButtonAbuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomButtonAbuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
