import { PaymentyMethodHandler } from "./Payment";

export class Credito implements PaymentyMethodHandler {
  next?: PaymentyMethodHandler;
  constructor(next?: PaymentyMethodHandler) {
    this.next = next;
  }
  pay(amount: number): void {
    if (amount <= 300 && amount > 200) {
      console.log("Paid with Credito");
      return;
    }
    this.next?.pay(amount);
  }
}
