import { TestBed, inject } from '@angular/core/testing';

import { ApponimentService } from './apponiment.service';

describe('ApponimentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApponimentService]
    });
  });

  it('should be created', inject([ApponimentService], (service: ApponimentService) => {
    expect(service).toBeTruthy();
  }));
});
