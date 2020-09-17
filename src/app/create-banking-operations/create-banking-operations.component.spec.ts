import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBankingOperationsComponent } from './create-banking-operations.component';

describe('CreateBankingOperationsComponent', () => {
  let component: CreateBankingOperationsComponent;
  let fixture: ComponentFixture<CreateBankingOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBankingOperationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBankingOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
