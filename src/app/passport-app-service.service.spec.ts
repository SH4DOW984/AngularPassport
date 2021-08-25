import { TestBed } from '@angular/core/testing';

import { PassportAppServiceService } from './passport-app-service.service';

describe('PassportAppServiceService', () => {
  let service: PassportAppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassportAppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
