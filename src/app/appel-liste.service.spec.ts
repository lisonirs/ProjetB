import { TestBed } from '@angular/core/testing';

import { AppelListeService } from './appel-liste.service';

describe('AppelListeService', () => {
  let service: AppelListeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppelListeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
