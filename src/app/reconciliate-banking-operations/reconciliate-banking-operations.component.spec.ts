import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconciliateBankingOperationsComponent } from './reconciliate-banking-operations.component';

describe('ReconciliateBankingOperationsComponent', () => {
  let component: ReconciliateBankingOperationsComponent;
  let fixture: ComponentFixture<ReconciliateBankingOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReconciliateBankingOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconciliateBankingOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
