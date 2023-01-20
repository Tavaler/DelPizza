import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaRmComponent } from './pizza-rm.component';

describe('PizzaRmComponent', () => {
  let component: PizzaRmComponent;
  let fixture: ComponentFixture<PizzaRmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaRmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaRmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
