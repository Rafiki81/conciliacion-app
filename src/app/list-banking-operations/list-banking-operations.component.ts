import { BankingOperation } from './../model/banking-operation';
import { Component, OnInit } from '@angular/core';
import { BankingOperationService } from '../services/banking-operation.service';

@Component({
  selector: 'app-list-banking-operations',
  templateUrl: './list-banking-operations.component.html',
  styleUrls: ['./list-banking-operations.component.css']
})
export class ListBankingOperationsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'customerId', 'account' , 'amount' , 'date' , 'isReconciliated'];

  bankingOperations: BankingOperation[] = undefined;

  constructor(private bankingOperationService: BankingOperationService) { }

  ngOnInit(): void {

    this.bankingOperationService.getAll().subscribe(
      data => this.bankingOperations = data,
      error => console.log(`Algo ha ido mal en clientes:${error}`)

    );


  }

}
