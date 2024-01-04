import { PaymentyMethodHandler } from "./Payment";

export class Boleto implements PaymentyMethodHandler {
  next?: PaymentyMethodHandler;
  constructor(next?: PaymentyMethodHandler) {
    this.next = next;
  }
  pay(amount: number): void {
    if (amount <= 100) {
      console.log("Paid with Boleto");
      return;
    }
    this.next?.pay(amount);
  }
}
