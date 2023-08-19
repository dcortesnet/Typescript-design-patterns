// Subject interface
interface Image {
  display(): void;
}

// Real Subject
class RealImage implements Image {
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
    this.loadFromDisk();
  }

  private loadFromDisk() {
    console.log(`Loading image: ${this.filename}`);
  }

  display() {
    console.log(`Displaying image: ${this.filename}`);
  }
}

// Proxy
class ProxyImage implements Image {
  private realImage: RealImage | null = null;
  private filename: string;

  constructor(filename: string) {
    this.filename = filename;
  }

  display() {
    if (this.realImage === null) {
      this.realImage = new RealImage(this.filename);
    }
    this.realImage.display();
  }
}

// Usage
const image1: Image = new ProxyImage("image1.jpg");
const image2: Image = new ProxyImage("image2.jpg");

image1.display(); // Output: Loading image: image1.jpg Displaying image: image1.jpg
image1.display(); // Output: Displaying image: image1.jpg (Loaded from proxy)

image2.display(); // Output: Loading image: image2.jpg Displaying image: image2.jpg
image2.display(); // Output: Displaying image: image2.jpg (Loaded from proxy)
