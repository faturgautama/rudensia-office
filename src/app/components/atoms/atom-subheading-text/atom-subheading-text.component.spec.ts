import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomSubheadingTextComponent } from './atom-subheading-text.component';

describe('AtomSubheadingTextComponent', () => {
  let component: AtomSubheadingTextComponent;
  let fixture: ComponentFixture<AtomSubheadingTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomSubheadingTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomSubheadingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
