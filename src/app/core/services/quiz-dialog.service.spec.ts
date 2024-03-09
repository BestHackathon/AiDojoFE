import { TestBed } from '@angular/core/testing';

import { QuizDialogService } from './quiz-dialog.service';

describe('QuizDialogService', () => {
  let service: QuizDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
