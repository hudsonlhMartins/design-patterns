export interface PaymentyMethodHandler {
  next?: PaymentyMethodHandler;
  pay(amount: number): void;
}
