const names = ['Max', 'Manu', 'Julie'];

console.log(names[1]);
for(const el of names ){
    console.log(el);
}

names.push('Julie');
console.log(names.length);

const julieIndex = names.findIndex(el => el === 'Julie');

//remove element in array
names.splice(2, 1);
