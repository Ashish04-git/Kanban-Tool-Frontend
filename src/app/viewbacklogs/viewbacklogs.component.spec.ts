import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbacklogsComponent } from './viewbacklogs.component';

describe('ViewbacklogsComponent', () => {
  let component: ViewbacklogsComponent;
  let fixture: ComponentFixture<ViewbacklogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbacklogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbacklogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
