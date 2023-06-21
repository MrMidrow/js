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

class Build {
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


let apartment42 = new Apartment();
let apartment22 = new Apartment();
let apartment23 = new Apartment();

apartment42.addHumanInApart(alex);
apartment22.addHumanInApart(john);
apartment23.addHumanInApart(lilu)


let newHouse = new Build(2);
newHouse.addApartmentInBuild(apartment42, apartment22)


console.log(apartment42.apartment);
console.log(apartment22.apartment);
console.log(newHouse.build);

