//Event Listener for Popular Drink Button
$("#popBtn").on("click", function () {

    //API call for popular drink list
    const popular = {
        "async": true,
        "crossDomain": true,
        "url": "https://the-cocktail-db.p.rapidapi.com/randomselection.php",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "617a4f066cmsh0a311780b1b6d9cp1ada08jsna7edb4fc2985",
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
        }
    };

    $.ajax(popular).done(function (response) {
        // After the data from the AJAX request comes back
        var results = response.drinks;
        console.log(results);
        let li;
        for (let i = 0; i < results.length; i++) {
            console.log(results[i].strDrink);
            let drinks = results[i].strDrink
            li = document.createElement('DIV');
            $("#drinks").prepend(li);
            $(li).text(drinks);
            // Retrieving the URL for the image
            var imgURL = results[i].strDrinkThumb;
            console.log(imgURL);
            // Creating an element to hold the image
            //var image = $("<img>").attr("src", imgURL);
            // Appending the image
            //$("#drinks").append(image);

        }
    })
})

//Event Listener for Vodka Button
$("#vodkaBtn").on("click", function () {
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
        for (let i = 0; i < vodkaDrinks.length; i + 3) {
            let vodkaPrint = vodkaDrinks[i].strDrink
            vodkaList = document.createElement('LI');
            $("#ingResults").prepend(vodkaList);
            $(vodkaList).text(vodkaPrint);

        }
    })
})
//Event Listener for Tequila Button
$("#tequilaBtn").on("click", function () {
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
        for (let i = 0; i < 30; i++) {
            let tequilaPrint = tequilaDrinks[i].strDrink
            tequilaList = document.createElement('LI');
            $("#ingResults").prepend(tequilaList);
            $(tequilaList).text(tequilaPrint);
        }
    })
})

//Event Listener for Rum Button
$("#rumBtn").on("click", function () {
    //API call for Rum drink list
    const rumIng = {
        "async": true,
        "crossDomain": true,
        "url": "https://the-cocktail-db.p.rapidapi.com/filter.php?i=rum",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "617a4f066cmsh0a311780b1b6d9cp1ada08jsna7edb4fc2985",
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
        }
    };

    $.ajax(rumIng).done(function (response) {
        var rumDrinks = response.drinks;
        console.log(rumDrinks);
        let rumList;
        for (let i = 0; i < 30; i++) {
            let rumPrint = rumDrinks[i].strDrink
            rumList = document.createElement('LI');
            $("#ingResults").prepend(rumList);
            $(rumList).text(rumPrint);
        }
    })
})


//Yelp API search by ingredient
$("#yelpBtn").on("click", function () {
    var drinkInput = document.getElementById("searchDrink").value;
    localStorage.setItem("drinkTerm", drinkInput);
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search",
        "method": "GET",
        "headers": {
            "authorization": "Bearer OtPHKCuY1jmOsGPUZzwRiTMPh801290sRO3XbX026ZzZ2WD5lrTKhwb5WLX9tk_vsi_HJA_dvlqm8Y8mVfiCsWilSh9jwSykvB1QcsLTFEhmcGqvOSxFrnx8fCarX3Yx",
        },
        "data": {
            "term": localStorage.getItem('drinkTerm'),
            "latitude": localStorage.getItem('lat'),
            "longitude": localStorage.getItem('long'),
        }
    };

    //Display Yelp Results
    $.ajax(settings).done(function (response) {
        console.log(response);
        var yelpBusiness = response.businesses;
    let yelpResults;
    for (let i = 0; i < 30; i++) {
        let yelpName = yelpBusiness[i].name
        let yelpURL = yelpBusiness[i].url
        yelpResults = document.createElement('div');
       yelpResults.id = "yelp"; //Assign div id
    yelpResults.setAttribute("style", "float:left; width:66.5%; line-height: 26px; text-align:left; font-size:12pt; padding-left:8px; height:26px;"); //Set div attributes
    yelpResults.style.background =  "gray";
    a = document.createElement('a');
    a.href =  yelpURL; // Insted of calling setAttribute 
    a.innerHTML = yelpName // <a>INNER_TEXT</a>
    yelpResults.appendChild(a); // Append the link to the div
    document.body.appendChild(yelpResults); // And append the div to the document body
    }
})})