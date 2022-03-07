import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprojecttaskComponent } from './updateprojecttask.component';

describe('UpdateprojecttaskComponent', () => {
  let component: UpdateprojecttaskComponent;
  let fixture: ComponentFixture<UpdateprojecttaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateprojecttaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateprojecttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
