import { TestBed } from '@angular/core/testing';

import { DashbordinfoService } from './dashbordinfo.service';

describe('DashbordinfoService', () => {
  let service: DashbordinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashbordinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
