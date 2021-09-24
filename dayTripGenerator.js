"use strict"

//random destinations

let destinations = ["Destin", "Miramar Beach", "Pensacola","Navarre"];

function randomDestinations(destinations){
    let randDest = Math.floor(Math.random() * destinations.length);
    return destinations[randDest];
}


let dest = randomDestinations(destinations);
console.log(dest);


//random restaurants

let restaurant = ["Mexican", "Seafood", "Thai","Italian"];

function randomRestaurant(restaurant){
    let randomRest = Math.floor(Math.random() * restaurant.length);
    return restaurant[randomRest]

}
    
let rest = randomRestaurant(restaurant);
console.log(rest);

//random mode of transportation

let modeOfTransportation = ["Walk", "Ride Bike", "Drive Car","Drive Motorcycle"];

function randomModeOfTransportation(modeOfTransportation){
    let randomModeOfTrans = Math.floor(Math.random() * modeOfTransportation.length);
    return modeOfTransportation[randomModeOfTrans]

}

let modeOfTrans = randomModeOfTransportation(modeOfTransportation);
console.log(modeOfTrans);
    
//random form of entertainment

let formOfEntertainment = ["Movie", "Circus", "Live Show","Bowling"];

function randomFormOfEntertainment(formOfEntertainment){
    let randomFormOfEnt = Math.floor(Math.random() * formOfEntertainment.length);
    return formOfEntertainment[randomFormOfEnt]
}

let formOfEnt = randomFormOfEntertainment(formOfEntertainment);
console.log(formOfEnt);

//confirm user likes randomized suggestions


