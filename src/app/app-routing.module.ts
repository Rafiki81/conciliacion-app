import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBankingOperationsComponent } from './create-banking-operations/create-banking-operations.component';
import { HomeComponent } from './home/home.component';
import { ListBankingOperationsComponent } from './list-banking-operations/list-banking-operations.component';
import { ReconciliateBankingOperationsComponent } from './reconciliate-banking-operations/reconciliate-banking-operations.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent },
  {path: 'bankingOperatons' , component: ListBankingOperationsComponent },
  {path: 'createBankingOperations' , component: CreateBankingOperationsComponent  },
  {path: 'reconciliateBankingOperations' , component: ReconciliateBankingOperationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
