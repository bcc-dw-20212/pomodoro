import { TestBed } from '@angular/core/testing';

import { IfceserviceService } from './ifceservice.service';

describe('IfceserviceService', () => {
  let service: IfceserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IfceserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
