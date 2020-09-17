import { TestBed } from '@angular/core/testing';

import { BankingOperationService } from './banking-operation.service';

describe('BankingOperationService', () => {
  let service: BankingOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankingOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
