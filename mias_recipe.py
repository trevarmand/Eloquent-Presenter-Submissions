from time import sleep


ingredients = ["flour", "egg"]
quantities = ["420", "4"]  # flour in grams, ~3.5 cups
servings = 6
minute = 1


def make_flour_bowl():
    print("shape flour into bowl on the counter")
    return "flour"


def beat_eggs():
    print("crack eggs into center of flour bowl and beat them")
    return "eggs"


def knead(dough, time):
    for i in range(time):
        print("keep kneading!")
        sleep(1*minute)
    return "kneaded dough"


def roll(dough):
    print("using rolling pin or pasta machine, roll dough it sheets ~4 inches wide and as thin as you can make it")
    return "dough sheets"


def start_water():
    print("bring a pot of salted water to boil")
    return "salted cooking water"


def shape(dough, pasta_type):
    if pasta_type == "spaghetti":
        print("roll dough into log and thinly slice")
    else:
        print("cut pasta into desired shape")

    return "noodles"


def cook(pasta, time):
    for i in range(time):
        print("cook")
        sleep(1*minute)
    print("remove pasta from water")
    print("reserve half cup pasta water")
    return "cooked_pasta", "reserve 1/2 cup pasta water"


def get_sauce():
    return "sauce of choice"


def combine(*items):
    mixture = ""
    for item in items:
        if not mixture:
            mixture = item
        else:
            mixture = mixture + "and" + item


def make_pasta():
    flour = make_flour_bowl()
    eggs = beat_eggs()
    dough = combine(eggs, flour)
    dough = knead(dough, time=10)
    dough = roll(dough)
    start_water()
    uncooked_pasta = shape(dough, pasta_type="spaghetti")
    cooked_pasta, pasta_water = cook(uncooked_pasta, time=2)
    sauce = get_sauce()
    combine(sauce, pasta_water, cooked_pasta)


make_pasta()
