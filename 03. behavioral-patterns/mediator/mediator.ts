// Mediator interface
interface Mediator {
  sendMessage(message: string, colleague: Colleague): void;
}

// Colleague abstract class
abstract class Colleague {
  constructor(protected mediator: Mediator, private _name: string) {}

  get name() {
    return this._name;
  }

  send(message: string) {
    this.mediator.sendMessage(message, this);
  }

  abstract receive(message: string): void;
}

// Concrete Colleagues
class User extends Colleague {
  constructor(mediator: Mediator, name: string) {
    super(mediator, name);
  }

  receive(message: string) {
    console.log(`[${this.name}] received: ${message}`);
  }
}

// Concrete Mediator
class ChatRoom implements Mediator {
  sendMessage(message: string, colleague: Colleague) {
    console.log(`[${colleague.name}] sends: ${message}`);
  }
}

// Usage
const chatRoom = new ChatRoom();

const user1 = new User(chatRoom, "User 1");
const user2 = new User(chatRoom, "User 2");

user1.send("Hello!"); // Output: [User 1] sends: Hello!
user2.send("Hi there!"); // Output: [User 2] sends: Hi there!

user1.receive("Hey!"); // Output: [User 1] received: Hey!
user2.receive("Hello back!"); // Output: [User 2] received: Hello back!
