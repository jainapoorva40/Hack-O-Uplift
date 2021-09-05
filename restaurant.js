document.getElementById('button4').addEventListener('click',getAPI2);
function getAPI2(){
    //fetch('https://api.github.com/users/jainapoorva40')
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
    //https://type.fit/api/quotes
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let outpu=``;
        data.forEach(function(nameee){
            outpu+=`<li>${nameee.idMeal}</li>`;
        })
    
    document.getElementById('output').innerHTML=outpu;
    })
}