export class BankingOperation {
  id: number;
  customerId: string;
  account: string;
  amount: number;
  date: Date;
  isReconciliated: boolean;

  constructor(
    id?: number,
    customerId?: string,
    account?: string,
    amount?: number,
    date?: Date,
    isReconciliated?: boolean

  ) {
    this.id = id;
    this.customerId = customerId;
    this.account = account;
    this.amount = amount;
    this.date = date;
    this.isReconciliated = isReconciliated;
  }
}
