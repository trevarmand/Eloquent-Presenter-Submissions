import pantry
import fridge
import measurements as m
import time

def mix_ingredients(*to_mix):
	return "".join(to_mix)
		
def measure(ingredient, amount):
	return ingredient.portion(amount)

def take_out_ingredients():
	return {"flour": pantry.get_flour(), 
			"sugar": pantry.get_sugar(),
			"salt": pantry.get_salt(),
			"oil": pantry.get_oil(),
			"baking_soda": pantry.get_baking_soda(),
			"cinnamon": pantry.get_cinnamon(),
			"cloves": pantry.get_cloves(),
			"nutmeg": pantry.get_nutmeg(),
			"pumpkin": pantry.get_pumpkin(),
			"eggs": fridge.get_eggs()}

def return_ingredients(ingredients):
	[i.replace() for i in ingredients]

def bake_loafs(*args):
	for loaf in args:
		# 350 fahrenheit
		loaf.bake(350)
	# time in seconds = 50 mins
	time.sleep(3000)
	return args


def make_pumpkin_bread():
	ingredients = take_out_ingredients()
	pans = pantry.get_pans()
	# Measure and mix wet ingredients
	eggs = measure(ingredients['eggs'], "4")
	sugar = measure(ingredients['sugar'], "2 Cups")
	oil = measure(ingredients['oil'], "1 Cup")
	wet_ingredients = mix_ingredients(eggs, sugar, oil)
	# Measure and mix dry ingredients
	flour = measure(ingredients['flour'], "2.5 Cups")
	salt = measure(ingredients['salt'], "1 tsp")
	baking_soda = measure(ingredients['baking_soda'], "2 tsp")
	cinnamon = measure(ingredients['cinnamon'], "1 tsp")
	nutmeg = measure(ingredients['nutmeg'], "0.5 tsp")
	cloves = measure(ingredients['cloves'], "0.5 tsp")
	dry_ingredients = mix_ingredients(flour, salt, baking_soda, cinnamon, nutmeg, cloves)
	# Mix wet and dry and pumpkin
	pumpkin = measure(ingredients['pumpkin'], "2 Cups")
	batter = mix_ingredients(pumpkin, dry_ingredients, wet_ingredients)
	# Bake and pour the loaves
	filled_pans = batter.pour(pans)
	bake_loafs(filled_pans)
	# Return ingredients to pantry
	return_ingredients(ingredients)


if __name__ == "__main__":
	make_pumpkin_bread()
