
import { TestBed, inject } from '@angular/core/testing';
import {AccountsettingsService} from "./accountsettings.service";

describe('AccountsettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccountsettingsService]
    });
  });

  it('should be created', inject([AccountsettingsService], (service: AccountsettingsService) => {
    expect(service).toBeTruthy();
  }));
});
