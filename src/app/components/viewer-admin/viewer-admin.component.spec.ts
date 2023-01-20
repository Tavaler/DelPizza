import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerAdminComponent } from './viewer-admin.component';

describe('ViewerAdminComponent', () => {
  let component: ViewerAdminComponent;
  let fixture: ComponentFixture<ViewerAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewerAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
