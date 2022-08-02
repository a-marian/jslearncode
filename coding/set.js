//set should mantain a list of unique values and should support add, delete and inclusion
//it should also have the ability to get its size

class Set {
    constructor(arr){
        this.arr = arr
    }

    add(val){
        if(!this.has(val)) this.arr.push(val)
    }

    delete(val){
        this.arr = this.arr.filter(x => x !== val)
    }

    has(val){
        return this.arr.includes(val)
    }
}

