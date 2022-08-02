//ways to declare objects in javascript

// version 1
const o = new Object();
o.firstName= "Marian";
o.lastName= "Alex";
o.isTeaching = true;
o.greet = function(){
    console.log('Hello!');
}
//// version 2
const o2= {}
o2.firstName='Luna'
o2['lastName'] = "Escala"
const key = "isTeaching"
o2[key] = true
o2['greet'] = function() {
    console.log('Hi!');
}
// version 3
const o3= {
    firstName: 'Marian',
    lastName: 'Soliz',
    isTeaching: true,
    greet: function(){
        console.log('hi')
    },
    address: {
        street: 'Main st.',
        number: 234
    }
}
console.log(o3);
