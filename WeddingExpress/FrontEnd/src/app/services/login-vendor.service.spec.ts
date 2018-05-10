import { LogInVendorServiceService } from './login-vendor.service.service';
import { TestBed, inject } from '@angular/core/testing';

describe('LogInVendorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogInVendorServiceService]
    });
  });

  it('should be created', inject([LogInVendorServiceService], (service: LogInVendorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
