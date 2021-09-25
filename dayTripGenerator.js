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



// randomly re select destination, restaurant, mode of transportation, and form of entertainment. Confirms whether trip is complete.



let userIsHappy = false

while (userIsHappy === false) {
    let userInput = prompt(`Your destination is ${dest}. Your restaurant is ${rest}. Your mode of Transportation is ${modeOfTrans}. Your form of entertainment is ${formOfEnt}. Press 5 if you are satisfied with your trip. Press 1 to change your destination. Press 2 to change your restaurant. Press 3 to change your mode of transportation. Press 4 to change your form of Entertainment.`)
    if(userInput === "5"){
        alert(`Congrats! Your destination is ${dest}. Your restaurant is ${rest}. Your mode of Transportation is ${modeOfTrans}. Your form of entertainment is ${formOfEnt}.`);
        userIsHappy = true 
    }
    else if(userInput === "1"){
        dest = randomDestinations(destinations);
        alert(`Congrats! Your new destination is ${dest}. Your restaurant is ${rest}. Your mode of Transportation is ${modeOfTrans}. Your form of entertainment is ${formOfEnt}.`);
        confirm("Are you satisfied with your new destination?")
        alert(`Congrats! Your destination is ${dest}. Your restaurant is ${rest}. Your mode of Transportation is ${modeOfTrans}. Your form of entertainment is ${formOfEnt}.`)
        userIsHappy = true
    }
    else if(userInput === "2"){
        rest = randomRestaurant(restaurant) 
        alert(`Congrats! Your destination is ${dest}. Your new restaurant is ${rest}. Your mode of Transportation is ${modeOfTrans}. Your form of entertainment is ${formOfEnt}.`);
        confirm("Are you satisfied with your new restaurant?")
        alert(`Congrats! Your destination is ${dest}. Your new restaurant is ${rest}. Your mode of Transportation is ${modeOfTrans}. Your form of entertainment is ${formOfEnt}.`)
        userIsHappy = true
    }   
    else if(userInput === "3"){
        modeOfTrans = randomModeOfTransportation(modeOfTransportation)
        alert(`Congrats! Your destination is ${dest}. Your restaurant is ${rest}. Your new mode of Transportation is ${modeOfTrans}. Your form of entertainment is ${formOfEnt}.`);
        confirm("Are you satisfied with your new mode of Transportation?")
        alert(`Congrats! Your destination is ${dest}. Your restaurant is ${rest}. Your mode of Transportation is ${modeOfTrans}. Your form of entertainment is ${formOfEnt}.`)
        userIsHappy = true
    }   
    else if(userInput === "4"){
        formOfEnt = randomFormOfEntertainment(formOfEntertainment)
        alert(`Congrats! Your destination is ${dest}. Your restaurant is ${rest}. Your mode of Transportation is ${modeOfTrans}. Your new form of entertainment is ${formOfEnt}.`);
        confirm("Are you satisfied with your new form of entertainment?")
        alert(`Congrats! Your destination is ${dest}. Your restaurant is ${rest}. Your mode of Transportation is ${modeOfTrans}. Your new form of entertainment is ${formOfEnt}.`)
        userIsHappy = true
    }


}
