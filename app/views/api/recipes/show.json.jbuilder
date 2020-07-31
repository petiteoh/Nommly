json.recipe do 
    json.partial! "api/recipes/recipe", recipe: @recipe
end

json.ingredients do
    @recipe.ingredients.each do |ingredient| 
        json.set! ingredient.id do
            json.partial! "api/ingredients/ingredient", ingredient: ingredient
        end
    end
end

# json.extract! courses, :id, :course