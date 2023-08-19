// Interface for observers
interface Observer {
  update(message: string): void;
}

// Concrete observer class
class ConcreteObserver implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  update(message: string): void {
    console.log(`${this.name} received the message: ${message}`);
  }
}

// Subject class (object being observed)
class Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(message: string): void {
    for (const observer of this.observers) {
      observer.update(message);
    }
  }
}

// Using the Observer pattern
const subject = new Subject();

const observer1 = new ConcreteObserver("Observer 1");
const observer2 = new ConcreteObserver("Observer 2");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers("The subject has changed its state.");

subject.removeObserver(observer1);

subject.notifyObservers("The subject has changed again.");
