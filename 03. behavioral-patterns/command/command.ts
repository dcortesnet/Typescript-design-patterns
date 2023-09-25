// Interfaz Command
interface Command {
  execute(): void;
}

// Receiver (Receptor) - Clase que realiza la acción concreta
class Light {
  turnOn() {
    console.log("Light on");
  }

  turnOff() {
    console.log("Light off");
  }
}

// Concrete Commands (Comandos Concretos)
class TurnOnLightCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

class TurnOffLightCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

// Invoker (Invocador) - Clase que ejecuta los comandos
class RemoteControl {
  private command!: Command;

  setCommand(command: Command) {
    this.command = command;
  }

  pressButton() {
    console.log("Pressing the button on the remote control.");
    this.command.execute();
  }
}

// Client
const livingRoomLight = new Light();
const turnOnCommand = new TurnOnLightCommand(livingRoomLight);
const turnOffCommand = new TurnOffLightCommand(livingRoomLight);

const remoteControl = new RemoteControl();

remoteControl.setCommand(turnOnCommand);
remoteControl.pressButton(); // Light on

remoteControl.setCommand(turnOffCommand);
remoteControl.pressButton(); // Light off
