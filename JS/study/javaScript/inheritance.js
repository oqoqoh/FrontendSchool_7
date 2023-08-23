'use strict';
// Inheritance
// a way for one class ti extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('📐');
    }
    // overide 가능
    getArea() {
        return (this.width * this.height) / 2;
    }

    // Objectj 안의 메소드 재정의해서 사용 가능
    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
rectangle.getArea();

const triangle = new Triangle(20, 20, 'green');
triangle.draw();
triangle.getArea();

// Class checking: instanceOf
rectangle instanceof Rectangle; //true
triangle instanceof Rectangle; // false
triangle instanceof Triangle; // true
triangle instanceof Shape; // true
triangle instanceof Onject; // true
triangle instanceof Object; //true
triangle.toString();
