json.user do
    json.partial! "api/users/user", user: @nom.user # this user gives the @user  tp the user partial to extract! the information
end

json.recipe do
    json.partial! "api/recipes/recipe", recipe: @nom.recipe
end

