import { PaymentyMethodHandler } from "./chain/Payment";
import { Boleto } from "./chain/boleto";
import { Credito } from "./chain/credito";
import { Debito } from "./chain/debito";

class Implementer {
  constructor(protected paymentHandler: PaymentyMethodHandler) {}
  public pay(amount: number): void {
    this.paymentHandler.pay(amount);
  }
}

const boleto = new Boleto();
const debito = new Debito(boleto);
const credito = new Credito(debito);

const implemente = new Implementer(credito);

implemente.pay(201);
