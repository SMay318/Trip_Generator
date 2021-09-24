"use strict"

//random destinations

let destinations = ["Destin", "Miramar Beach", "Pensacola","Navarre"];

function randomDestinations(destinations){
    let randDest = Math.floor(Math.random() * destinations.length);
    return destinations[randDest];
}


let dest = randomDestinations(destinations);



//random restaurants

let restaurant = ["Mexican", "Seafood", "Thai","Italian"];

function randomRestaurant(restaurant){
    let randomRest = Math.floor(Math.random() * restaurant.length);
    return restaurant[randomRest]

}
    
let rest = randomRestaurant(restaurant);


//random mode of transportation

let modeOfTransportation = ["Walk", "Ride Bike", "Drive Car","Drive Motorcycle"];

function randomModeOfTransportation(modeOfTransportation){
    let randomModeOfTrans = Math.floor(Math.random() * modeOfTransportation.length);
    return modeOfTransportation[randomModeOfTrans]

}

let modeOfTrans = randomModeOfTransportation(modeOfTransportation);

    
//random form of entertainment

let formOfEntertainment = ["Movie", "Circus", "Live Show","Bowling"];

function randomFormOfEntertainment(formOfEntertainment){
    let randomFormOfEnt = Math.floor(Math.random() * formOfEntertainment.length);
    return formOfEntertainment[randomFormOfEnt]
}

let formOfEnt = randomFormOfEntertainment(formOfEntertainment);


//confirm user likes randomized suggestions

let generatedTripSuggestions = [rest, dest, modeOfTrans, formOfEnt]

function generatedSuggestion(generatedTripSuggestions){
let userInput = prompt("Do you like the randomly generated trip:" + ' ' + generatedTripSuggestions + "?")
    if(userInput == "Yes" || userInput == "yes"){
    alert("your trip has completed!" + " " + generatedTripSuggestions);
    }    
    else{
    alert("Try Again!")
    
    }    
}

let myResult = generatedSuggestion(generatedTripSuggestions);
console.log(myResult)