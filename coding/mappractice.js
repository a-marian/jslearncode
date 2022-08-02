const resultData = new Map();

resultData.set('average', 1.45);
resultData.set('lastResult', null);

const germany = {name: 'Germany', population: 45};

resultData.set(germany, 0.45);

for(const el of resultData){
    console.log(el);
}

//overriding
resultData.set('average', 9.99);


console.log(resultData.get('average'));

//deleting germany from map by key
resultData.delete(germany);
console.log(resultData);
