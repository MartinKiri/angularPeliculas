import { TestBed } from '@angular/core/testing';

import { UsabilidadService } from './usabilidad.service';

describe('UsabilidadService', () => {
  let service: UsabilidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsabilidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
