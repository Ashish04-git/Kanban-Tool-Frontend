import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewprojecttasksComponent } from './viewprojecttasks.component';

describe('ViewprojecttasksComponent', () => {
  let component: ViewprojecttasksComponent;
  let fixture: ComponentFixture<ViewprojecttasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewprojecttasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewprojecttasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
