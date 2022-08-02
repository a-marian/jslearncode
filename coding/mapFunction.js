//higher-orderer fuction

const x = [0, 1, 2, 3]

function addOne(number){ return number + 1}
addOne(1)
x.map
console.log(x.map(addOne))
//filter function
function isGreaterThanOne(num){ return num > 1 }
isGreaterThanOne(120)
isGreaterThanOne(43)
console.log(x.filter(isGreaterThanOne))

//reduce function
function add(x, y) {return x + y }
add(1,2)
console.log(x.reduce(add))


function map(arr, fn){
    const newArr = []
    for (let i=0; i < arr.length; i++){
        let val = arr[i]
        newArr.push(fn(val))
    }
    /**
     * */
    return newArr
}
function addOne(num){ return num + 1 }
const ar = [0,1,2,3]
console.log(map(ar, addOne))
