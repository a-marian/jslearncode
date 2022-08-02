// this point to global object for node global for browser window
const person= {
    name:'marian',
    greet: function(){ console.log(this.name)},
}
person.greet()
const friend = {
    name:'Fatima'
}
friend.greet = person.greet

friend.greet()

const greet = person.greet
name='Heidy'
greet()

const greet2 = person.greet.bind({name: 'this is bound object'})
person.greet.call({name: 'this is bound object'})
person.greet.apply({name:'this is bound object'})
greet2()

const newPerson = {
    name2 : 'Jhon',
    greet() => {console.log(this.name2)}
}
const name2 = 'Lupa'
newPerson.greet()
