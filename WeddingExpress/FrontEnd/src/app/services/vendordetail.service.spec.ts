import { TestBed, inject } from '@angular/core/testing';

import { VendordetailService } from './vendordetail.service';

describe('VendordetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VendordetailService]
    });
  });

  it('should be created', inject([VendordetailService], (service: VendordetailService) => {
    expect(service).toBeTruthy();
  }));
});
