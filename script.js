'use strict'
const obj = {x: 12, y: 3, sign: '/'}
class SuperMath{
    check(obj) {
        const question = prompt(`Вы хочете зробити дію ${obj.sign} з ${obj.x} i ${obj.y}.\nPress Enter if you ready, or press Cansel if not`);
        if(question == null) return this.input();
        return this.calc(obj)
    }
    input() {
        let newObj = {
            x: +prompt('Please, enter -> X'),
            y: +prompt('Please, enter -> Y'),
            sign: prompt('Please, enter sign -> " - , + , / , % ".')
        }
        return this.calc(newObj)
    }
    calc(obj){
        switch(obj.sign){
            case '-':
                console.log(obj.x - obj.y);
                break;
            case '+':
                console.log(obj.x + obj.y);
                break;
            case '/':
                console.log(obj.x / obj.y);
                break;
            case '*':
                console.log(obj.x * obj.y);
                break;
            case '%':
                console.log(obj.x % obj.y);
                break;
            default:
                console.log(`invalid character : ${obj.sign}`);
        }
    }
}
const newObj = new SuperMath();
newObj.check(obj)