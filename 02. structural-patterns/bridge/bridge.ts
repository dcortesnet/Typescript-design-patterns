// Implementation: Device
interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(volume: number): void;
}

// Concrete Device Implementations
class TV implements Device {
  private enabled: boolean = false;
  private volume: number = 50;

  isEnabled() {
    return this.enabled;
  }

  enable() {
    this.enabled = true;
  }

  disable() {
    this.enabled = false;
  }

  getVolume() {
    return this.volume;
  }

  setVolume(volume: number) {
    if (volume >= 0 && volume <= 100) {
      this.volume = volume;
    }
  }
}

class Radio implements Device {
  private on: boolean = false;
  private volume: number = 30;

  isEnabled() {
    return this.on;
  }

  enable() {
    this.on = true;
  }

  disable() {
    this.on = false;
  }

  getVolume() {
    return this.volume;
  }

  setVolume(volume: number) {
    if (volume >= 0 && volume <= 100) {
      this.volume = volume;
    }
  }
}

// Abstraction: Remote Control
abstract class Remote {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  abstract togglePower(): void;
  abstract volumeUp(): void;
  abstract volumeDown(): void;
}

// Concrete Remote Control Implementations
class BasicRemote extends Remote {
  constructor(device: Device) {
    super(device);
  }

  togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeUp() {
    const currentVolume = this.device.getVolume();
    this.device.setVolume(currentVolume + 10);
  }

  volumeDown() {
    const currentVolume = this.device.getVolume();
    this.device.setVolume(currentVolume - 10);
  }
}

class AdvancedRemote extends Remote {
  volumeUp(): void {
    throw new Error("Method not implemented.");
  }
  volumeDown(): void {
    throw new Error("Method not implemented.");
  }
  constructor(device: Device) {
    super(device);
  }

  togglePower() {
    this.device.isEnabled() ? this.device.disable() : this.device.enable();
  }

  mute() {
    this.device.setVolume(0);
  }
}

// Usage
const tv = new TV();
const radio = new Radio();

const basicRemote = new BasicRemote(tv);
const advancedRemote = new AdvancedRemote(radio);

basicRemote.togglePower();
basicRemote.volumeUp();
basicRemote.volumeDown();

advancedRemote.togglePower();
advancedRemote.mute();
