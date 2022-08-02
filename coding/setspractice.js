const ids = new Set([1,1]);

const ids = new Set();

ids.add('bc');
ids.add(1);
ids.add('bb3');
ids.add(1);

for(const el of ids){
    console.log(el);
}

console.log(ids.has('bb3'));

ids.delete('bb3');

console.log(ids);

