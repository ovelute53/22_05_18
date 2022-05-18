class Rect{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    get area(){
        return this.calcArea();
    }
    
    calcArea(){
        return this.height * this.width
    }
}

const square = new Rect(10,10)
// console.log(square.calcArea());
console.log(square.area);