import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links = [
    {name: 'home', title: 'Home'},
    {name: 'bankingOperatons', title: 'Operaciones Bancarias'},
    {name: 'createBankingOperations', title: 'Crear Operaciones Bancarias'},
    {name: 'reconciliateBankingOperations', title: 'Conciliar Operaciones Bancarias'},
  ];

  activeLink = this.links[0];
  title = 'conciliationApp';
}
