import { LogInServiceService } from './login.service.service';
import { TestBed, inject } from '@angular/core/testing';

describe('LogInServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogInServiceService]
    });
  });

  it('should be created', inject([LogInServiceService], (service: LogInServiceService) => {
    expect(service).toBeTruthy();
  }));
});
