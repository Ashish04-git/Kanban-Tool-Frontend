import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtaskbyidentiComponent } from './viewtaskbyidenti.component';

describe('ViewtaskbyidentiComponent', () => {
  let component: ViewtaskbyidentiComponent;
  let fixture: ComponentFixture<ViewtaskbyidentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtaskbyidentiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtaskbyidentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
