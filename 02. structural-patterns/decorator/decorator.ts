// Component interface
interface Coffee {
  cost(): number;
  description(): string;
}

// Concrete Component
class SimpleCoffee implements Coffee {
  cost() {
    return 5;
  }

  description() {
    return "Simple Coffee";
  }
}

// Decorator base class
abstract class CoffeeDecorator implements Coffee {
  protected decoratedCoffee: Coffee;

  constructor(coffee: Coffee) {
    this.decoratedCoffee = coffee;
  }

  abstract cost(): number;
  abstract description(): string;
}

// Concrete Decorators
class MilkDecorator extends CoffeeDecorator {
  cost() {
    return this.decoratedCoffee.cost() + 2;
  }

  description() {
    return this.decoratedCoffee.description() + ", Milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost() {
    return this.decoratedCoffee.cost() + 1;
  }

  description() {
    return this.decoratedCoffee.description() + ", Sugar";
  }
}

// Usage
let coffee: Coffee = new SimpleCoffee();
console.log(coffee.description()); // Output: Simple Coffee
console.log("Cost:", coffee.cost()); // Output: Cost: 5

coffee = new MilkDecorator(coffee);
console.log(coffee.description()); // Output: Simple Coffee, Milk
console.log("Cost:", coffee.cost()); // Output: Cost: 7

coffee = new SugarDecorator(coffee);
console.log(coffee.description()); // Output: Simple Coffee, Milk, Sugar
console.log("Cost:", coffee.cost()); // Output: Cost: 8
