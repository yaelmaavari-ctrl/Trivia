import { TestBed } from '@angular/core/testing';

import { QuestionsAPIService } from './questions-api.service';

describe('QuestionsAPIService', () => {
  let service: QuestionsAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionsAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
