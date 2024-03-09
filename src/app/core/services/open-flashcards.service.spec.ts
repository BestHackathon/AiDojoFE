import { TestBed } from '@angular/core/testing';

import { OpenFlashcardsService } from './open-flashcards.service';

describe('OpenFlashcardsService', () => {
  let service: OpenFlashcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenFlashcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
