import { BankingOperationService } from './../services/banking-operation.service';
import { BankingOperation } from './../model/banking-operation';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-banking-operations',
  templateUrl: './create-banking-operations.component.html',
  styleUrls: ['./create-banking-operations.component.css']
})
export class CreateBankingOperationsComponent implements OnInit {

  bankingOperationsForm: FormGroup;
  bankingOperation: BankingOperation = new BankingOperation();
  bankingOperations: BankingOperation[] = [];

  displayedColumns: string[] = ['id', 'customerId', 'account' , 'amount' , 'date' , 'isReconciliated'];

  constructor(
    private formBuilder: FormBuilder,
    private bankingOperationService: BankingOperationService,
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

  create(): void{

    this.bankingOperationService.createBankingOperations(this.bankingOperations).subscribe();

  }
}
