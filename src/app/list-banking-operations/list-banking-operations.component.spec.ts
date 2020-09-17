import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBankingOperationsComponent } from './list-banking-operations.component';

describe('ListBankingOperationsComponent', () => {
  let component: ListBankingOperationsComponent;
  let fixture: ComponentFixture<ListBankingOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBankingOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBankingOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
