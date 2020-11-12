//Event Listener for Vodka Button
$("#vodkaBtn").on("click", function () {
    cleanResults;    
    //API call for vodka drink list
    const vodkaIng = {
        "async": true,
        "crossDomain": true,
        "url": "https://the-cocktail-db.p.rapidapi.com/filter.php?i=vodka",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "617a4f066cmsh0a311780b1b6d9cp1ada08jsna7edb4fc2985",
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
        }
    };

    $.ajax(vodkaIng).done(function (response) {
        // After the data from the AJAX request comes back
        var vodkaDrinks = response.drinks;
        console.log(vodkaDrinks);
        let vodkaList;
        for (let i = 0; i < 30; i++) {
            let vodkaPrint = vodkaDrinks[i].strDrink
            vodkaList = document.createElement('LI');
            $("#ingResults").prepend(vodkaList);
            $(vodkaList).text(vodkaPrint);

        }
    })
})
//Event Listener for Tequila Button
$("#tequilaBtn").on("click", function () {
    cleanResults;
//API call for Tequila drink list
const tequilaIng = {
    "async": true,
    "crossDomain": true,
    "url": "https://the-cocktail-db.p.rapidapi.com/filter.php?i=tequila",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "617a4f066cmsh0a311780b1b6d9cp1ada08jsna7edb4fc2985",
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
    }
};

$.ajax(tequilaIng).done(function (response) {
    var tequilaDrinks = response.drinks;
    console.log(tequilaDrinks);
    let tequilaList;
    for (let i = 0; i<30; i++){
        let tequilaPrint = tequilaDrinks[i].strDrink
        tequilaList = document.createElement('LI');
        $("#ingResults").prepend(tequilaList);
        $(tequilaList).text(tequilaPrint);
    }
})
})
