// event loop stack

function recurse(){
    console.log('recursion!')
    return recurse()
}

recurse()
