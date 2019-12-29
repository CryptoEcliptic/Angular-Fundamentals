class TestPropertyiesClass{
    //With that syntax during compilation fields are auto generated because of the provided parameters
    constructor(public _x?: number, private _y?: number){
    }

    //Getter through which we read the field "y" value;
    get y(){ 
        return this._y;
    };  

    //Setter through which we set the field "y" value and validate the data from outside;
    set y(value){
        if(value < 1 || value > 10 ){
            throw new Error("The provided value must be between 1 and 10");
        }
        this._y = value;
    }
}

let testProp = new TestPropertyiesClass();
testProp.y = 5;