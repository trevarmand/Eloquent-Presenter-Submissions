import cooking_mama_skills

# define variables for plov 
meat = 1kg of lamb and chicken 
rice = 1kg of rice
onions[] = new onion(3)
carrots[] = new carrot(5)
garlic = new garlic(1)
seasoning = new packet_plov(1)


#define variables for side salad
tomatoes = beef-tomatoe(3)
salad_onions = sweet-onion(2)


# define other vars
pot = pot with thick bottom 

def julienne(ing_list):
	for ing in ing_list:
		ing.cut_very_small_thin_slices()
	return

def soak(ing, medium):
	medium.put(ing)
	wait(30)
	return



# start ingredient prep
meat = meat.split(bite-sized pieces); 
rice = soak(rice.wash(), salted_water); 
onions = julienne(onions)
carrots = juilienne(carrots)



# start adding in ingredients
pot.set(medium_heat)
pot.add(vedgetable oil)
wait(5 mins)
pot.add(meat)
wait(13 mins)
pot.add(onions)
pot.add(carrots)
pot.wait(13 mins)
pot.add(rice)
pot.add(salted_water)
pot.add(seasoning)
pot.add(garlic)
pot.cover()
pot.set(low_heat)
pot.wait(20 mins)
pot.set(no_heat)
pot.wait(10 mins)

# define the plov
plov = pot.inside

def season(dish):
	dish.add(salt)
	dish.add(pepper)

# make side salad
salad.add(julienne(tomatoes))
salad.add(julienne(salad_onions))
season(salad)
salad.serve()

plov.mix
plov.serve

