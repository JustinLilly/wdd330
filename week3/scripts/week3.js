// let firstName = 'Justin';

// const sayHello = () => {

// }

// let person = {
//     firstName: 'Justin',
//     lastName: 'Lilly', 
//     iNumber: '123456',
//     location: null,
//     age: 27,

//     sayHello() {
//         console.log('Hello ' + this.firstName + ' ' + this.lastName);
//     }
// };

// console.log(person);
// person.sayHello();

// let todo = { 
//     id: Date.now, 
//     content: 'Mow the lawn',
//     completed: false }

import { Person } from './person.js';

let people = [];

let person1 = new Person('Justin', 'Lilly', '123456', 'Gilbert', 27);
let person2 = new Person('Brandon', 'Lilly', '123456', 'Gilbert', 29);
let person3 = new Person('Jared', 'Lilly', '123456', 'Gilbert', 24);
let person4 = new Person('Jennifer', 'Lilly', '123456', 'Gilbert', 19);

people.push(person1);
people.push(person2);
people.push(person3);
people.push(person4);

people.forEach(
    person => {
        console.log(person);
    }
);