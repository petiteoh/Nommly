json.extract! user, :email, :id
json.displayName user.display_name
json.iconUrl user.icon_url
json.nommedRecipeIds user.nom_recipes.pluck(:id)
json.dislikedIngredientIds user.disliked_ingredients.pluck(:id)
