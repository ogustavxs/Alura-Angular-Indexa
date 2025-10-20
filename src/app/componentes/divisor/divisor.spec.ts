import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Divisor } from './divisor';

describe('Divisor', () => {
  let component: Divisor;
  let fixture: ComponentFixture<Divisor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Divisor],
    }).compileComponents();

    fixture = TestBed.createComponent(Divisor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
