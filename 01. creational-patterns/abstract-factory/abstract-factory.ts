interface Engine {
  start(): void;
}

interface Tire {
  info(): string;
}

class GasolineEngine implements Engine {
  start(): void {
    console.log("Motor de gasolina encendido.");
  }
}

class ElectricEngine implements Engine {
  start(): void {
    console.log("Motor eléctrico encendido.");
  }
}

class SummerTire implements Tire {
  info(): string {
    return "Neumático de verano";
  }
}

class WinterTire implements Tire {
  info(): string {
    return "Neumático de invierno";
  }
}

interface VehicleFactory {
  createEngine(): Engine;
  createTire(): Tire;
}

class GasolineCarFactory implements VehicleFactory {
  createEngine(): Engine {
    return new GasolineEngine();
  }

  createTire(): Tire {
    return new SummerTire();
  }
}

class ElectricCarFactory implements VehicleFactory {
  createEngine(): Engine {
    return new ElectricEngine();
  }

  createTire(): Tire {
    return new SummerTire();
  }
}

function assembleCar(factory: VehicleFactory): void {
  const engine = factory.createEngine();
  const tire = factory.createTire();

  console.log("Build vehicle:");
  engine.start();
  console.log(`Type of tire: ${tire.info()}`);
}

const gasolineCarFactory = new GasolineCarFactory();
assembleCar(gasolineCarFactory);

const electricCarFactory = new ElectricCarFactory();
assembleCar(electricCarFactory);
