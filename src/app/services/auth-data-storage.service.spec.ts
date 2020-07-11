import { TestBed } from '@angular/core/testing';

import { AuthDataStorageService } from './auth-data-storage.service';

describe('AuthDataStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthDataStorageService = TestBed.get(AuthDataStorageService);
    expect(service).toBeTruthy();
  });
});
