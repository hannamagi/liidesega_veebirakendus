interface CalculatingFunction{
    calculate(x: number):number;
    inputUnit():string;
    outputUnit():string;
}

class InchesToCm implements CalculatingFunction{
    calculate(inches: number):number{
        return inches*2.54;
    }
    inputUnit(): string {
        return "in";
    }
    outputUnit(): string{
        return "cm";
    }
}

class Figure{
    constructor(protected calculator:CalculatingFunction, protected g){
        this.draw();
    }
    draw(){
        for(let i=0; i<20; i+=2){
            this.g.fillRect(10*i, 300-3*this.calculator.calculate(i), 3, 3);
            this.g.fillText(i+"", 10*i, 300);
            this.g.fillText(this.calculator.calculate(i).toFixed(1), 0,
                300-3*this.calculator.calculate(i));
        }
        this.g.fillText(this.calculator.inputUnit(), 10*20, 300);
        this.g.fillText(this.calculator.outputUnit(), 0,
            300-3*this.calculator.calculate(20));
    }
}