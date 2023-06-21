'use strict'

class Human{
	constructor(name, gender){
  	this.name = name;
    this.gender = gender
  }
}

class Apartment{
  apartment = []

  addHumanInApart (hmn) {
    if(hmn instanceof Human == false) {
      throw Error('Error')
      return;
    }
    this.apartment.push(hmn);
  }
}

class BuildHouse {
	build = []
  
  constructor (maxAprt) {
   this.maxAprt = maxAprt;
  }
  
  addApartmentInBuild (...theArgs) {
  	if(this.maxAprt >= theArgs.length){
		this.build.push(...theArgs)
    }else{
    	throw Error('You have a max apartment in this build')
    }
  }
}

let alex = new Human('Alex', 'male');
let john = new Human('John', 'male');
let lilu = new Human('lilu', 'girl');


let apartment1 = new Apartment();
let apartment2 = new Apartment();
let apartment3 = new Apartment();

apartment1.addHumanInApart(alex);
apartment2.addHumanInApart(john);
apartment3.addHumanInApart(lilu)


let newHouse = new BuildHouse(2);
newHouse.addApartmentInBuild(apartment1, apartment2)


console.log(apartment1.apartment);
console.log(apartment2.apartment);
console.log(newHouse.build);
