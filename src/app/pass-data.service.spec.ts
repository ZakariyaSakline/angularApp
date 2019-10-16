import { TestBed } from '@angular/core/testing';

import { PassDAtaService } from './pass-data.service';

describe('PassDAtaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PassDAtaService = TestBed.get(PassDAtaService);
    expect(service).toBeTruthy();
  });
});
