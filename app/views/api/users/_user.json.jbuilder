json.extract! user, :email, :id
json.displayName user.display_name
json.nommedRecipeIds user.nom_recipes.pluck(:id)
