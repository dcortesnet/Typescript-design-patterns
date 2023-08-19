// Subsystem classes
class CPU {
  start() {
    console.log("CPU started");
  }

  stop() {
    console.log("CPU stopped");
  }
}

class Memory {
  load() {
    console.log("Memory loaded");
  }

  unload() {
    console.log("Memory unloaded");
  }
}

class HardDrive {
  read() {
    console.log("Hard Drive read");
  }

  write() {
    console.log("Hard Drive written to");
  }
}

// Facade class
class ComputerFacade {
  private cpu: CPU;
  private memory: Memory;
  private hardDrive: HardDrive;

  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  start() {
    console.log("Starting computer...");
    this.cpu.start();
    this.memory.load();
    this.hardDrive.read();
    console.log("Computer started!");
  }

  shutdown() {
    console.log("Shutting down computer...");
    this.cpu.stop();
    this.memory.unload();
    this.hardDrive.write();
    console.log("Computer shutdown!");
  }
}

// Usage
const computerFacade = new ComputerFacade();

computerFacade.start(); // Output: Starting computer... CPU started Memory loaded Hard Drive read Computer started!
computerFacade.shutdown(); // Output: Shutting down computer... CPU stopped Memory unloaded Hard Drive written to Computer shutdown!
