const person = {firstName: 'Max', age: 32,
    hobbies: ['Sports', 'Cooking'],
    great(){
    console.log('Hi, I am' + this.firstName);
    }
};

console.log(person['firstName']);
console.log(person.firstName);

person.lastName = 'Alex';
console.log(person.lastName);

delete person.age;

console.log(person);
//showing great method
person.great();

