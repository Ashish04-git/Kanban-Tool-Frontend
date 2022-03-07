import { TestBed } from '@angular/core/testing';

import { ProjecttaskserviceService } from './projecttaskservice.service';

describe('ProjecttaskserviceService', () => {
  let service: ProjecttaskserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjecttaskserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
