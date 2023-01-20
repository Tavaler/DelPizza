import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmsCreateComponent } from './rms-create.component';

describe('RmsCreateComponent', () => {
  let component: RmsCreateComponent;
  let fixture: ComponentFixture<RmsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
