# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Cuisine.destroy_all
Course.destroy_all
Recipe.destroy_all

demoUser = User.create(email: "demo@demo.com", password: 11111111, display_name: "Demo User")

cuisine1 = Cuisine.create(cuisine: "American")
cuisine2 = Cuisine.create(cuisine: "Malaysian")
cuisine3 = Cuisine.create(cuisine: "Indian")
cuisine4 = Cuisine.create(cuisine: "Mexican")
cuisine5 = Cuisine.create(cuisine: "Italian")

course1 = Course.create(course: "Soup")
course2 = Course.create(course: "Appetizer")
course3 = Course.create(course: "Salad")
course4 = Course.create(course: "Main")
course5 = Course.create(course: "Dessert")

r1 = Recipe.create(
    creator: "NOMMLY",
    title: "Pretzels",
    description: "30 minute soft pretzels",
    calories: 400,
    total_time: 30,
    directions: "https://sallysbakingaddiction.com/30-minute-whole-wheat-pretzels/",
    cuisine_id: cuisine1.id,
    course_id: course2.id
)

r2 = Recipe.create(
    creator: "NOMMLY",
    title: "Pan Mee",
    description: "Pan Mee – Malaysian dish with hand-torn noodles in a rich anchovy broth and topped with ground pork, veggie and crispy anchovies.",
    calories: 378,
    total_time: 75,
    directions: "https://rasamalaysia.com/pan-mee-recipe/",
    cuisine_id: cuisine2.id,
    course_id: course4.id
)

r3 = Recipe.create(
    creator: "NOMMLY",
    title: "Panna Cotta",
    description: "A traditional, easy, and delicious Italian custard. I had a difficult time finding a good and easy recipe on the internet, so I made up my own recipe. It tastes just like the panna cotta served at Italian restaurants. Serve with warm hot fudge sauce and fresh raspberries on top. This keeps well for several days in the refrigerator.",
    calories: 418,
    total_time: 255,
    directions: "https://www.allrecipes.com/recipe/72567/panna-cotta/",
    cuisine_id: cuisine5.id,
    course_id: course5.id
)

r4 = Recipe.create(
    creator: "NOMMLY",
    title: "Easy Churros Recipe",
    description: "Homemade Churros coated in cinnamon sugar are the ultimate treat! Watch the video tutorial and you will see just how easy it is to make this Churros recipe using pantry staples.",
    calories: 368,
    total_time: 35,
    directions: "https://natashaskitchen.com/churros-recipe/",
    cuisine_id: cuisine4.id,
    course_id: course5.id
)

r5 = Recipe.create(
    creator: "NOMMLY",
    title: "Mulligatawny Soup",
    description: "This fragrant Indian Mulligatawny Soup recipe is spiced with curry and made from creamy red lentils, carrots, apples, and coconut milk. Make a double batch and freeze the leftovers!",
    calories: 287,
    total_time: 55,
    directions: "https://thewanderlustkitchen.com/indian-mulligatawny-soup/",
    cuisine_id: cuisine3.id,
    course_id: course1.id
)

r6 = Recipe.create(
    creator: "NOMMLY",
    title: "Balsamic Bruschetta",
    description: "Simple appetizer - the balsamic vinegar gives it a little kick. Best if the mixture has 1 or 2 hours to blend flavors before serving.",
    calories: 194,
    total_time: 15,
    directions: "https://www.allrecipes.com/recipe/54165/balsamic-bruschetta/",
    cuisine_id: cuisine5.id,
    course_id: course2.id
)

r7 = Recipe.create(
    creator: "NOMMLY",
    title: "Ahi Poke Salad Recipe",
    description: "This poke salad is way better than anything you'll find on a restaurant menu.",
    calories: 202,
    total_time: 80,
    directions: "https://www.allrecipes.com/recipe/109293/ahi-poke-salad/",
    cuisine_id: cuisine1.id,
    course_id: course3.id
)

r8 = Recipe.create(
    creator: "NOMMLY",
    title: "Bubur Cha Cha (Nyonya Coconut Milk Dessert)",
    description: "‘Bubur cha-cha’ is a coconut milk dessert which commonly contains sweet potatoes and taro. In Malaysia and Singapore, bubur cha-cha is usually served as a dessert or sometimes for supper. This is one of the more popular Nyonya/Peranakan desserts which is colourful yet delicious.",
    calories: 474,
    total_time: 60,
    directions: "https://www.nyonyacooking.com/recipes/bubur-cha-cha-nyonya-coconut-milk-dessert~rJ70DvivM9-X",
    cuisine_id: cuisine2.id,
    course_id: course5.id
)

r9 = Recipe.create(
    creator: "NOMMLY",
    title: "Nyonya Kuih Pie Tee",
    description: "Nyonya Kuih Pie Tee Recipe and Step-by-Step Guide.",
    calories: 18,
    total_time: 180,
    directions: "https://rasamalaysia.com/step-by-step-guide-to-making-nyonya/",
    cuisine_id: cuisine2.id,
    course_id: course2.id,
)

r10 = Recipe.create(
    creator: "NOMMLY",
    title: "Vegan Pesto Pasta",
    description: "Whether you’re looking to get more protein into your diet or not, this recipe is a must-try. Gluten-free pasta is tossed in a creamy, incredibly flavorful vegan PEA pesto (!!), along with sun-dried tomatoes and arugula. Delicious, nutritious, and ready in 30 minutes!",
    calories: 552,
    total_time: 30,
    directions: "https://minimalistbaker.com/pea-pesto-pasta-with-sun-dried-tomatoes-arugula-vegan-gf/",
    cuisine_id: cuisine5.id,
    course_id: course4.id
)

# pretzel recipe ingredients
i1 = Ingredient.create(ingredient: "1 and 1/2 cups (360ml) warm water (lukewarm, no need to take temperature)")
i2 = Ingredient.create(ingredient: "1 packet active dry or instant yeast (2 and 1/4 teaspoons)")
i3 = Ingredient.create(ingredient: "1 teaspoon salt")
i4 = Ingredient.create(ingredient: "1 Tablespoon (8g) granulated sugar")
i5 = Ingredient.create(ingredient: "3 and 3/4 – 4 cups (460-500g) all-purpose flour or mix of whole wheat and all-purpose flours (spoon & leveled), plus more for work surface")
i6 = Ingredient.create(ingredient: "1 large egg, beaten")
i7 = Ingredient.create(ingredient: "coarse sea salt, for sprinkling")

# bruschetta recipe ingredients
i8 = Ingredient.create(ingredient: "2 cloves Garlic, raw")
i9 = Ingredient.create(ingredient: "⅓ cup Basil, fresh")

ri1 = RecipeIngredient.create(recipe_id: r1.id, ingredient_id: i1.id)
ri2 = RecipeIngredient.create(recipe_id: r1.id, ingredient_id: i2.id)
ri3 = RecipeIngredient.create(recipe_id: r1.id, ingredient_id: i3.id)
ri4 = RecipeIngredient.create(recipe_id: r1.id, ingredient_id: i4.id)
ri5 = RecipeIngredient.create(recipe_id: r1.id, ingredient_id: i5.id)
ri6 = RecipeIngredient.create(recipe_id: r1.id, ingredient_id: i6.id)
ri7 = RecipeIngredient.create(recipe_id: r1.id, ingredient_id: i7.id)

ri8 = RecipeIngredient.create(recipe_id: r2.id, ingredient_id: i3.id)

ri9 = RecipeIngredient.create(recipe_id: r3.id, ingredient_id: i3.id)

ri10 = RecipeIngredient.create(recipe_id: r4.id, ingredient_id: i3.id)

ri11 = RecipeIngredient.create(recipe_id: r5.id, ingredient_id: i3.id)

ri12 = RecipeIngredient.create(recipe_id: r6.id, ingredient_id: i3.id)
ri13 = RecipeIngredient.create(recipe_id: r6.id, ingredient_id: i8.id)
ri14 = RecipeIngredient.create(recipe_id: r6.id, ingredient_id: i9.id)

ri15 = RecipeIngredient.create(recipe_id: r7.id, ingredient_id: i3.id)

ri16 = RecipeIngredient.create(recipe_id: r8.id, ingredient_id: i3.id)

ri17 = RecipeIngredient.create(recipe_id: r9.id, ingredient_id: i3.id)

ri18 = RecipeIngredient.create(recipe_id: r10.id, ingredient_id: i3.id)
ri19 = RecipeIngredient.create(recipe_id: r6.id, ingredient_id: i9.id)




