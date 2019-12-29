//Class without constructor
class PointClass{
    x: number;
    y: number;

    draw(){
        console.log("X: " + this.x + " Y: " + this.y)
    };
}
//Create instance of a class without constructor
let point = new PointClass();
point.x = 2;
point.y = 4;
point.draw();

//Class with constructor
class Figure{
    x: number;
    y: number;

    //Parameters with "?" means that they are optional 
    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log("X of the Figure: " + this.x + " Y of the figure: " + this.y)
    }
}

//Create instance of a class with ctor parameters provided
let figure = new Figure(2, 4);
figure.draw();

//Create instance of a class without ctor parameters provided
let figureWithoutParameters = new Figure();
