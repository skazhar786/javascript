    fetch ('https://api.restful-api.dev/objects?id=3&id=5&id=10')
    .then(function (data){
        return data.json()
    }).then(function(value){
console.log(value);

    }).catch("system error")     //easiest way to fetch data from a api
    