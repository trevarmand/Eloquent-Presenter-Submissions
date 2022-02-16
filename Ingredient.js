/*
Class Representing an Ingredient contains name and amount in grams
 */
class Ingredient {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
}


//Create a list of ingredients
const basil = new Ingredient('Basil', '10g');
const chicken = new Ingredient('Chicken', '150g');
const springOnions = new Ingredient('Spring Onions', '40g');
const garlic = new Ingredient('Garlic', '15g');
const chiliPowder = new Ingredient('Chili Powder', '10g');
const soySauce = new Ingredient('Soy Sauce', '10g');
const sichuanPeppercorn = new Ingredient('Sichuan Peppercorn', '20g');
const salt = new Ingredient('Salt', '5g');
const pepper = new Ingredient('Pepper', '5g');
const herbMix = new Ingredient('Herb Mix', '5g');
const rice = new Ingredient('Rice', '200g');
const oil = new Ingredient('Oil', '15g');


const listToSaute = [ garlic, springOnions, sichuanPeppercorn, chiliPowder, soySauce, chicken];
const listToPrepChicken = [salt, pepper, herbMix, chiliPowder];
const listToFryChicken = [oil, chicken];
const listToPlate = [rice, basil]


function meal() {

    //Step 1: Prep the Chicken
    prep(listToPrepChicken);

    //Step 2: Cook the Chicken in a pan
    panFry(listToFryChicken);

    //Step 3: Saute to make the sauce
    saute(listToSaute);

    //Step 4 : Plate and garnish the chicken
    plate(listToPlate);

}


function prep(list) {

    for(var i = 0; i < list.length; i++) {

        //Add each ingredient to coat the chicken

    }
}

function panFry(list) {

    for(var i = 0; i < list.length; i++) {

        //Add each ingredient to the pan one at a time

    }
}

function saute(list) {

    for(var i = 0; i < list.length; i++) {

        //Add each ingredient to saute one at a time

    }
}

function plate(list) {

    for(var i = 0; i < list.length; i++) {

        //Add everything to the plate to be served

    }
}





