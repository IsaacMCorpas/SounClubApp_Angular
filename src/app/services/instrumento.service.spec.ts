import { TestBed, inject } from '@angular/core/testing';

import { InstrumentoService } from './instrumento.service';

describe('InstrumentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstrumentoService]
    });
  });

  it('should be created', inject([InstrumentoService], (service: InstrumentoService) => {
    expect(service).toBeTruthy();
  }));
});
