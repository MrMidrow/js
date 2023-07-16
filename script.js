'use strict'

function* Foo() {
    console.log('start')
    yield 1
    yield 2
    yield 3
    console.log('finish')
}
  
const iterator = Foo()
iterator.next().value // 1
iterator.next().done // false

function Boo(array) {
    let index = 0;

    return {
        next(){
            return index < array.length ? {value: array[index++], done: false} : {done: true}
        }
    }
}
let param = [console.log('start'), 1, 2, 3, console.log('finish')]
const iterator2 = Boo(param)
iterator2.next().value // 1
iterator2.next().done // false