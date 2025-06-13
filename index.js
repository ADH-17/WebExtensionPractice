console.log('Hello World'); // strings kept in ' ' 

// variables and concatination
let firstName = 'Ayden';
let lastName = 'Humphries';
name = firstName + ' ' + lastName;
console.log(name);
let age = 20;
let isApproved = true; 

// const practice
const interestRate = 0.3;
//interestRate = 1; should cause error
console.log(interestRate);

let person = {
    firstName: 'Ayden',
    lastName: 'Humphries',
    color: 'white',
    age: 20
};

// dot notation access
person.name = 'John';

// Bracket Notation
person['name'] = 'Mary';

console.log(person.name)

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
selectedColors[3] = 1;
console.log(selectedColors);

// performs task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);

}

// calculates a value
function square(number){
    return number * number; 
}

greet('Ayden', 'Humphries');
let number = square(2);
console.log(number); 