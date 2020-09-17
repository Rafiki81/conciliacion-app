import { TestBed } from '@angular/core/testing';

import { ReconciliateBankingOperationService } from './reconciliate-banking-operation.service';

describe('ReconciliateBankingOperationService', () => {
  let service: ReconciliateBankingOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReconciliateBankingOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
