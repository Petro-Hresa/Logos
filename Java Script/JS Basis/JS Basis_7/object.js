


// Task1===============================================
//
let person = new Object();
    person.firstName = 'Petro';
    person.secondName = 'Gresa';
    person.showDate = function(){
    console.log(`firstName: ${this.firstName};  secondName: ${this.secondName};`);
};
person.showDate();

let newPerson = Object.assign({}, person);
    newPerson.firstName = 'Ivan';
    newPerson.secondName = 'Ivanenko';
newPerson.showDate();

// Task2===================================================
//
// let myMath = {};
//     myMath.a= 5;
//     myMath.b=2;
//
// let s, k, j, d;
//
// myMath.sum = function(){
//   s = this.a + this.b;
//   console.log(s);
//   };
//
// myMath.multiplication = function(){
//   k = this.a * this.b;
//   console.log(k);
//   };
//
// myMath.division = function(){
//  j = this.a / this.b;
//   console.log(j);
// };
//
// myMath.subtraction = function(){
//   d = this.a - this.b;
//   console.log(d);
// };
//
// myMath.sum();
// myMath.multiplication();
// myMath.division();
// myMath.subtraction();
