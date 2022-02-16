// re-live the past by creating a dish you find so very nostalgic
export async function makeQabuliPulao() {
  await internalizeTheConstantPassingOfTimeAsYouAge() 
  const { ingredients, pans } = lookAtPantryAndRealizeYouNeedGroceries();

  const lamb = setUpLamb(pans.medPot, ingredients.lambStew, ingredients.spiceRub);

  while(isCooking(lamb)) {
    const toppings = sauteRaisinsAndCarrots(pans.frypan, ingredients.toppings);
    const rice = boilRice(pans.largePot, ingredients.rice);
  }

  putItAllTogether(rice, lamb);

  return "QABULI_PULAO";
}

// simultaneously let all of these thoughts consume you and wonder where all the time has gone
async function internalizeTheConstantPassingOfTimeAsYouAge() {
    return Promise.all([
        "I applied for my first co-op, then a pandemic hit, and now I'm applying for my last co-op",
        "85% of the people I know are graduating",
        "Sicko Mode dropped while I was in college",
        "I have not celebrated my birthday with my family in 3 years",
  ]);
}

// returns a collection of cooking materials and ingredients
function lookAtPantryAndRealizeYouNeedGroceries() {
    const pans = { largePot: "LARGE_POT", medPot: "MED_POT", frypan: "FRYPAN" }
  
    const ingredients = {
      spiceRub: [
        {"garamMasala": ".5 tsp"},
        {"groundCinnamon": ".25 tsp"},
        {"groundCardamom": ".25 tsp"}, 
        {"groundBlackPepper": ".25 tsp"},
        {"salt": "1 tsp"}
      ], 
      lambStew: [
        {"yellow_onions": "2 whole chopped"}, 
        {"vegetableOil": ".25 cups"}, 
        {"lamb": "1.5 lbs"},
        {"water": "1.25 cups"},
      ], 
      toppings: [
        {"carrot_strips": "1.5 cups"}, 
        {"raisins": "1 cup"}, 
        {"sugar": "1 tsp"}
      ], 
      rice: [
        {"salt": "1 tsp"},
        {"basmati_rice": "2 cups"} // Ahu Bhara is another viable type of rice for this dish
      ],
    }
  
    return { pans, ingredients }
  }

// prep the lamb for cooking
function setUpLamb(pot : any, lambStew : any, spices : any) {
  addToPot(pot, lambStew.oil);
  setPotTemp("MEDIUM");

  // prep onions
  addToPot(lambStew.yellowOnions);
  wait(pot, (potState) => isGoldenBrown(potState.onions) || "15 minutes");
  const brownedOnions = removeFromPot(ingredients.yellowOnions);

  // add lamb
  addToPot(lambStew.lamb);
  addToPot(lambStew.oil);
  addAllToPot(spices);
  setPotTemp("HIGH");
  wait(pot, potState => potState.isBrowned(lamb));

  // cook lamb with onions to make stew
  addToPot(pot, lambStew.water);
  addToPot(pot, brownedOnions);
  wait(pot, potState => potState.elapsed < "1 hr");  
}

// create the toppings for the rice
function sauteRaisinsAndCarrots(pot, toppings) {
  addToPot(toppings.oil);
  setPotTemp("MEDIUM");
  addAllToPot([topping.carrots, topping.raisins, topping.sugar]);
  wait(pot, (potState) => isGoldenBrown(potState.carrots) && arePlump(potState.raisins));
}

// mix the rice and lamb together
function putItAllTogether(rice : any, lamb : any) {
  makeHoles(rice, 4)
  const stock = extractStock(lamb, ".5 cups");
  pour(stock, rice);
  mix()

  if (rice.hasExcessLiquid()) {
    rice.pot.setTemp("MEDIUM");
    rice.pot.add("Paper Towel");
    rice.pot.wait(potState => potState.elapsedTime < "25 min")
  }

  place(lamb, rice);
  place(toppings, rice);
}
