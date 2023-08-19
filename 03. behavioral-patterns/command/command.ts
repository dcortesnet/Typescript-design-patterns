// Receiver
class Light {
  turnOn() {
    console.log("Light is on");
  }

  turnOff() {
    console.log("Light is off");
  }
}

// Command interface
interface Command {
  execute(): void;
}

// Concrete Commands
class TurnOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

class TurnOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

// Invoker
class RemoteControl {
  private commands: Command[] = [];

  addCommand(command: Command) {
    this.commands.push(command);
  }

  pressButton() {
    for (const command of this.commands) {
      command.execute();
    }
  }
}

// Usage
const light = new Light();
const turnOnCommand = new TurnOnCommand(light);
const turnOffCommand = new TurnOffCommand(light);

const remote = new RemoteControl();
remote.addCommand(turnOnCommand);
remote.addCommand(turnOffCommand);

remote.pressButton(); // Output: Light is on Light is off
