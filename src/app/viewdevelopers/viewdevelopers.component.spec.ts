import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdevelopersComponent } from './viewdevelopers.component';

describe('ViewdevelopersComponent', () => {
  let component: ViewdevelopersComponent;
  let fixture: ComponentFixture<ViewdevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdevelopersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
