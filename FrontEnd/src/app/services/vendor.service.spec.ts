import { VendorServiceService } from './vendor.service';
import { TestBed, inject } from '@angular/core/testing';

describe('VendorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VendorServiceService]
    });
  });

  it('should be created', inject([VendorServiceService], (service: VendorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
