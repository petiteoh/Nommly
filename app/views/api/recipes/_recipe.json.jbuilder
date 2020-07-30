json.extract! recipe, :id, :creator, :title, :description, :calories, :directions
json.ingredientIds recipe.ingredient_ids
json.totalTime recipe.total_time
