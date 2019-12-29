//Class with constructor
class TestFigure{
    private x: number;
    private y: number;

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
let testFigure = new TestFigure(2, 4);

//X and Y properties are not accessible because they are private.
//testFigure.x = 5; 
//testFigure.y = 10;
testFigure.draw();

class TestFigureAlternative{
    //With that syntax during compilation fields are auto generated because of the provided parameters
    constructor(public x?: number, private y?: number){
    }

    draw(){
        console.log("X of the Figure: " + this.x + " Y of the figure: " + this.y)
    }

    getY(){
        return this.y; //A method for accessing the private field from outside
    }
}

let testFigureAlternative = new TestFigureAlternative();
testFigureAlternative.x = 5; //Here we set a value to the field X which is public. 
//We can't see that field in the code above
let y = testFigureAlternative.getY();
