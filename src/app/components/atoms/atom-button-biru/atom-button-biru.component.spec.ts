import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomButtonBiruComponent } from './atom-button-biru.component';

describe('AtomButtonBiruComponent', () => {
  let component: AtomButtonBiruComponent;
  let fixture: ComponentFixture<AtomButtonBiruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomButtonBiruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomButtonBiruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
