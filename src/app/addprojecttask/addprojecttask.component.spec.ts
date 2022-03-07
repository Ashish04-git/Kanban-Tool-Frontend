import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprojecttaskComponent } from './addprojecttask.component';

describe('AddprojecttaskComponent', () => {
  let component: AddprojecttaskComponent;
  let fixture: ComponentFixture<AddprojecttaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprojecttaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprojecttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
