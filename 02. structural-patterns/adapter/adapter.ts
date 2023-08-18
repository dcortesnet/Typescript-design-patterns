class LegacyPrinter {
  printWeak(): void {
    console.log("Weak Message");
  }

  printStrong(): void {
    console.log("Strong Message");
  }
}

interface Printer {
  print(message: string): void;
}

// Adapter that adapts LegacyPrinter to Printer
class LegacyPrinterAdapter implements Printer {
  private legacyPrinter: LegacyPrinter;

  constructor(legacyPrinter: LegacyPrinter) {
    this.legacyPrinter = legacyPrinter;
  }

  print(message: string): void {
    this.legacyPrinter.printWeak(); // Adapting the weak message
  }
}

// New ModernPrinter class that uses Printer
class ModernPrinter implements Printer {
  print(message: string): void {
    console.log(`Modern Message: ${message}`);
  }
}

const legacyPrinter = new LegacyPrinter();
const legacyAdapter = new LegacyPrinterAdapter(legacyPrinter);

const modernPrinter = new ModernPrinter();

legacyAdapter.print("Hello from the adapter"); // Should display "Weak Message"
modernPrinter.print("Hello from the modern printer"); // Should display "Modern Message: Hello from the modern printer"
