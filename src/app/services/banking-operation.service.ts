import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BankingOperation } from '../model/banking-operation';
import { HttpParams } from '@angular/common/http';

const urlBase = environment.urlBase;

@Injectable({
  providedIn: 'root'
})
export class BankingOperationService {

  constructor(private http: HttpClient) { }

  getReconciliated(isReconciliated: boolean): Observable<BankingOperation[]>{

    let searchParams = new HttpParams();
    searchParams = searchParams.append('isReconciliated', 'true');

    return this.http.get<BankingOperation[]>(urlBase + 'bankingOperations?isReconciliated=' + isReconciliated);

  }

  getNonReconciliated(isReconciliated: boolean): Observable<BankingOperation[]>{

  let searchParams = new HttpParams();
  searchParams = searchParams.append('isReconciliated', 'false');

  return this.http.get<BankingOperation[]>(urlBase + 'bankingOperations?isReconciliated=' + isReconciliated);

  }

  getAll(): Observable<BankingOperation[]>{

    return this.http.get<BankingOperation[]>(urlBase + 'bankingOperations');

  }

  createBankingOperations(bankingOperations: BankingOperation[]): Observable<BankingOperation[]>{

    console.log(bankingOperations);
    return  this.http.post<BankingOperation[]>(`${urlBase}bankingOperations`, bankingOperations);
  }


}
