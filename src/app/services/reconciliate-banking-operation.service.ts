import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BankingOperation } from '../model/banking-operation';

const urlBase = environment.urlBase;

@Injectable({
  providedIn: 'root'
})
export class ReconciliateBankingOperationService {

  constructor(private http: HttpClient) { }

  reconciliateBankingOperations(bankingOperations: BankingOperation[]): Observable<BankingOperation>{

    console.log(bankingOperations);
    return  this.http.post<BankingOperation>(`${urlBase}bankingOperations/reconciliations`, bankingOperations);
  }
}
