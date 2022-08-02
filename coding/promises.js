
const url = ''
fetch(url).then(function (res){
    return res.json()

}).then(function (json){
    return({
            importantData: important.data
    })
}).then(function (data){

})
    .catch(function (err){
        //handle error
    })
function fetch(){

}
