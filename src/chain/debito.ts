import { PaymentyMethodHandler } from "./Payment";

export class Debito implements PaymentyMethodHandler {
  next?: PaymentyMethodHandler;
  constructor(next?: PaymentyMethodHandler) {
    this.next = next;
  }
  pay(amount: number): void {
    if (amount <= 200 && amount > 100) {
      console.log("Paid with Debito");
      return;
    }
    this.next?.pay(amount);
  }
}
