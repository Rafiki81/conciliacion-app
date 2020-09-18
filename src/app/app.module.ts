import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateBankingOperationsComponent } from './create-banking-operations/create-banking-operations.component';
import { ListBankingOperationsComponent } from './list-banking-operations/list-banking-operations.component';
import { ReconciliateBankingOperationsComponent } from './reconciliate-banking-operations/reconciliate-banking-operations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './home/home.component';
import { ReconciliatedPipe } from './pipes/reconciliated.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateBankingOperationsComponent,
    ListBankingOperationsComponent,
    ReconciliateBankingOperationsComponent,
    HomeComponent,
    ReconciliatedPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
