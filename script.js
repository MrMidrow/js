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
        if(!newObj.x || !newObj.y || !newObj.sign) return console.log("Очень жаль что вы не захотели воспользоваться нашим калькулятором")
        switch(newObj.sign){
            case '-':
                console.log('all good! Let`s go to the next step');
                return this.calc(newObj);
            case '+':
                console.log('all good! Let`s go to the next step');
                return this.calc(newObj);
            case '/':
                console.log('all good! Let`s go to the next step');
                return this.calc(newObj);
            case '*':
                console.log('all good! Let`s go to the next step');
                return this.calc(newObj);
            case '%':
                console.log('all good! Let`s go to the next step');
                return this.calc(newObj);
            default:
                console.log(`invalid character : ${obj.sign}`);
                return this.input()
        }
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