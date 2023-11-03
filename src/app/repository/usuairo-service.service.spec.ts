import { TestBed } from '@angular/core/testing';

import { UsuairoServiceService } from './usuairo-service.service';

describe('UsuairoServiceService', () => {
  let service: UsuairoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuairoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
