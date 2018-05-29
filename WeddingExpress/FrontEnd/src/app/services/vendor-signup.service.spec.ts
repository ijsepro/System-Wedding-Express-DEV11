import { TestBed, inject } from '@angular/core/testing';

import { VendorSignupService } from './vendor-signup.service';

describe('VendorSignupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VendorSignupService]
    });
  });

  it('should be created', inject([VendorSignupService], (service: VendorSignupService) => {
    expect(service).toBeTruthy();
  }));
});
