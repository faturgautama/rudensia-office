import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomHeadingTextComponent } from './atom-heading-text.component';

describe('AtomHeadingTextComponent', () => {
  let component: AtomHeadingTextComponent;
  let fixture: ComponentFixture<AtomHeadingTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomHeadingTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomHeadingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
