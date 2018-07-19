import { TestBed, inject } from '@angular/core/testing';

import { GeneroMusicalService } from './genero-musical.service';

describe('GeneroMusicalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeneroMusicalService]
    });
  });

  it('should be created', inject([GeneroMusicalService], (service: GeneroMusicalService) => {
    expect(service).toBeTruthy();
  }));
});
