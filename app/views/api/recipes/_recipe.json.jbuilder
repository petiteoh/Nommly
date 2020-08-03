json.extract! recipe, :id, :creator, :title, :description, :calories, :directions
json.ingredientIds recipe.ingredient_ids
json.totalTime recipe.total_time
json.courseId recipe.course_id
json.cuisineId recipe.cuisine_id
json.imageUrl recipe.image_url
json.noms recipe.noms.count

if current_user 
    json.nommedByCurrentUser !!recipe.noms.find_by(user_id: current_user.id)
else
    json.nommedByCurrentUser false
end
