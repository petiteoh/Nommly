json.extract! recipe, :id, :creator, :title, :description, :calories, :directions
json.ingredientIds recipe.ingredient_ids
json.totalTime recipe.total_time
json.courseId recipe.course_id
json.cuisineId recipe.cuisine_id
json.imageUrl recipe.image_url
