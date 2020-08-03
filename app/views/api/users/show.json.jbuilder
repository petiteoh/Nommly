
json.user do
    json.partial! "api/users/user", user: @user
end

json.recipes do
    @user.nom_recipes.each do |recipe|
        json.set! recipe.id do
            json.partial! "api/recipes/recipe", recipe: recipe
        end
    end
end

