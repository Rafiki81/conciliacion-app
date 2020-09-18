import { BankingOperation } from './../model/banking-operation';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReconciliateBankingOperationService } from '../services/reconciliate-banking-operation.service';

@Component({
  selector: 'app-reconciliate-banking-operations',
  templateUrl: './reconciliate-banking-operations.component.html',
  styleUrls: ['./reconciliate-banking-operations.component.css']
})
export class ReconciliateBankingOperationsComponent implements OnInit {

  bankingOperationsForm: FormGroup;
  bankingOperation: BankingOperation = new BankingOperation();
  bankingOperations: BankingOperation[] = [];

  displayedColumns: string[] = ['id', 'customerId', 'account' , 'amount' , 'date' , 'isReconciliated'];

  constructor(
    private formBuilder: FormBuilder,
    private reconciliatebankingOperationService: ReconciliateBankingOperationService,
  ) { }

  ngOnInit(): void {
    this.bankingOperationsForm = this.formBuilder.group({
      customerId: ['', Validators.required],
      account: ['', Validators.required],
      amount: ['', Validators.required],
      date: ['', Validators.required],
      reconciliated: ['', Validators.required],
      codigoPostal: ['', Validators.required],
      tipoEntrega: ['', Validators.required],
      codigoProducto: ['', Validators.required],
      codigoProveedor: ['', Validators.required],
      cantidad: ['', Validators.required]
    });
  }

  insertBankingOperation(): void {

    this.bankingOperation.customerId = this.bankingOperationsForm.value.customerId;
    this.bankingOperation.account = this.bankingOperationsForm.value.account;
    this.bankingOperation.amount = this.bankingOperationsForm.value.amount;
    this.bankingOperation.date = this.bankingOperationsForm.value.date;
    this.bankingOperation.reconciliated = false;

    this.bankingOperations.push(this.bankingOperation);

  }

  addBankingOperation(): void{

    this.insertBankingOperation();

    this.bankingOperationsForm.patchValue({
      customerId: '',
      account: '',
      amount: '',
      isReconciliated: ''
    });

  }

  reconciliate(): void{

    this.reconciliatebankingOperationService.reconciliateBankingOperations(this.bankingOperations).subscribe();

  }

}
