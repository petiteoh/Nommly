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

export const postNomToRecipe = (recipeId) => {
    return $.ajax({
        method: "POST",
        url: "/api/noms",
        data: { recipeId },
    })
}

export const deleteNomFromRecipe = (recipeId) => {
    return $.ajax({
        method: "DELETE",
        url: "/api/noms",
        data: { recipeId },
    })
}