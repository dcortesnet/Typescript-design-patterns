// Strategy interface
interface PaymentStrategy {
  pay(amount: number): void;
}

// Concrete strategy: Credit Card payment
class CreditCardPayment implements PaymentStrategy {
  private cardNumber: string;
  private cardHolder: string;

  constructor(cardNumber: string, cardHolder: string) {
    this.cardNumber = cardNumber;
    this.cardHolder = cardHolder;
  }

  pay(amount: number): void {
    console.log(`Paid $${amount} with credit card ${this.cardNumber}`);
  }
}

// Concrete strategy: PayPal payment
class PayPalPayment implements PaymentStrategy {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  pay(amount: number): void {
    console.log(`Paid $${amount} with PayPal account ${this.email}`);
  }
}

// Context class that uses a payment strategy
class ShoppingCart {
  private paymentStrategy: PaymentStrategy;

  constructor(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  checkout(amount: number): void {
    this.paymentStrategy.pay(amount);
  }
}

// Using the Strategy pattern
const creditCardPayment = new CreditCardPayment(
  "1234-5678-9012-3456",
  "John Doe"
);
const payPalPayment = new PayPalPayment("john@example.com");

const shoppingCart1 = new ShoppingCart(creditCardPayment);
const shoppingCart2 = new ShoppingCart(payPalPayment);

shoppingCart1.checkout(100.5);
shoppingCart2.checkout(75.2);
