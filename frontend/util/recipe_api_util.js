export const fetchRecipes = () => {
    return $.ajax({
        method: "GET",
        url: `/api/recipes`, 
    });
};

export const fetchRecipe = (recipeId) => {
    return $.ajax({
        method: "GET",
        url: `/api/recipes/${recipeId}`,
    })
}