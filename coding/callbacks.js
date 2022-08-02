function doSomething(callback){
    callback(1)
}

function doSomethingAsync(callback){
    setTimeout(function() {callback(2)}, 1000)
}

doSomething(console.log)

doSomethingAsync(console.log)
