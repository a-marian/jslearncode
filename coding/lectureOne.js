//dynamic typing
//primitive types : null undefined, string, number, boolean, (symbol)
const arr = [ 'dadadada', 34, function (){console.log('hello')}]

for (let i= 0; i < arr.length; i++){
    console.log('hello ' + arr[i]);
}
/**
//coersion
// == vs ===
// == coerce
/// explisit coersion

//which values are falsy?
//undefined, null, false, -0, NaN

// primitives vs objects
primitives are inmutables
 objects are mutable and stored by reference
**/

 const z = 23;
const explicit = String(z);
const implicit = z + "";

const r= 54;
console.log(typeof r);

console.log(typeof null);




