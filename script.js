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
        let drinkResults;
        for (let i = 0; i < results.length; i++) {
            let drinkName = results[i].strDrink
            let ingredient1 = results[i].strIngredient1
            let ingredient2 = results[i].strIngredient2
            let ingredient3 = results[i].strIngredient3
            let ingredient4 = results[i].strIngredient4
            drinkResults = document.createElement('LI');
            drinkResults.id = "drinkResults";
            drinkResults.style.background = "white";
            drinkResults.innerHTML = drinkName + " (Ingredients:" + ingredient1 + ", " + ingredient2 + ", " + ingredient3 + ", " + ingredient4 + ")";
            $("#drinks").append(drinkResults);
            
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
        var yelpBusiness = response.businesses;
        let yelpResults;
        for (let i = 0; i < 30; i++) {
            let yelpName = yelpBusiness[i].name
            let yelpURL = yelpBusiness[i].url
            yelpResults = document.createElement('div');
            yelpResults.id = "yelp"; //Assign div id
            yelpResults.setAttribute("style", "float:left; width:66.5%; line-height: 26px; text-align:left; font-size:12pt; padding-left:8px; height:26px;"); //Set div attributes
            yelpResults.style.background = "white";
            a = document.createElement('a');
            a.href = yelpURL; // Insted of calling setAttribute 
            a.innerHTML = yelpName // <a>INNER_TEXT</a>
            yelpResults.appendChild(a); // Append the link to the div
            $("#yelpResults").prepend(yelpResults); // And append the div to the document body
        }
    })
})
