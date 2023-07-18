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

function Boo(arr){
	let index = 0;
  return {
  	next(){
    	return index < arr.length ? {value: arr[index++], done: false} : {done: true}
    }
  }
}

let param = [1, 2, 3];

let iterator2 = Boo(param);

console.log(iterator2.next().value) // 1
console.log(iterator2.next().done) // false