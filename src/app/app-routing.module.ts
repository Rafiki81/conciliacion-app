import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBankingOperationsComponent } from './create-banking-operations/create-banking-operations.component';
import { ListBankingOperationsComponent } from './list-banking-operations/list-banking-operations.component';
import { ReconciliateBankingOperationsComponent } from './reconciliate-banking-operations/reconciliate-banking-operations.component';

const routes: Routes = [
  {path: 'listbankingOperations' , component: ListBankingOperationsComponent },
  {path: 'createbankingOperations' , component: CreateBankingOperationsComponent  },
  {path: 'bankingOperations/reconciliate' , component: ReconciliateBankingOperationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
