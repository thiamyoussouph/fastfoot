import { TestBed } from '@angular/core/testing';

import { AppStateserviceService } from './app-stateservice.service';

describe('AppStateserviceService', () => {
  let service: AppStateserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppStateserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
