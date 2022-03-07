import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewusertoadminComponent } from './viewusertoadmin.component';

describe('ViewusertoadminComponent', () => {
  let component: ViewusertoadminComponent;
  let fixture: ComponentFixture<ViewusertoadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewusertoadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewusertoadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
