export class BankingOperation {
  id: number;
  customerId: string;
  account: string;
  amount: number;
  date: Date;
  reconciliated: boolean;

  constructor(
    id?: number,
    customerId?: string,
    account?: string,
    amount?: number,
    date?: Date,
    reconciliated?: boolean

  ) {
    this.id = id;
    this.customerId = customerId;
    this.account = account;
    this.amount = amount;
    this.date = date;
    this.reconciliated = reconciliated;
  }
}
