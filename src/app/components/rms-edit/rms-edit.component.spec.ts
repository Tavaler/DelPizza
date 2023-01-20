import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmsEditComponent } from './rms-edit.component';

describe('RmsEditComponent', () => {
  let component: RmsEditComponent;
  let fixture: ComponentFixture<RmsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmsEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RmsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
