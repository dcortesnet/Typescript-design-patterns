class Shape {
  draw(): void {
    console.log("Draw generic");
  }
}

class Circle extends Shape {
  draw(): void {
    console.log("Draw circle");
  }
}

class Rectangle extends Shape {
  draw(): void {
    console.log("Draw rectangle");
  }
}

interface ShapeFactory {
  createShape(): Shape;
}

class CircleFactory implements ShapeFactory {
  createShape(): Shape {
    return new Circle();
  }
}

class RectangleFactory implements ShapeFactory {
  createShape(): Shape {
    return new Rectangle();
  }
}

// Use
function drawShape(factory: ShapeFactory): void {
  const shape = factory.createShape();
  shape.draw();
}

const circleFactory = new CircleFactory();
const rectangleFactory = new RectangleFactory();

drawShape(circleFactory);
drawShape(rectangleFactory);
