class Shape {
    constructor(sides, color) {
        this.sides = sides
        this.color = color
    }

    protFun() {
        console.log("prototype function")
    }

    static statFun() {
        console.log("static function")
    }

    get vertices() {
        return this.sides
    }
}

class Square extends Shape {
    constructor(color) {
        super(4, color)
    }
}

let redTriangle = new Shape(3, 'red')

let blueSquare = new Square('blue')