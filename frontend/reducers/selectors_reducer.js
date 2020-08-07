export const selectRecipes = state => Object.values(state.entities.recipes);

export const selectRecipeIngredients = (state, recipe) => {
  return recipe && Object.keys(state.entities.ingredients).length > 0 ? recipe.ingredientIds.map(id => state.entities.ingredients[id]) : [];
};

export const selectRecipeIngredient = (state, id) => {
  return state.entities.ingredients[id];
};

export const selectNommedRecipes = (state, nommedRecipeIds) => {
  return nommedRecipeIds ? nommedRecipeIds.map(nommedRecipeId => state.entities.recipes[nommedRecipeId]) : [];
} 

export const selectIngredients = state => Object.values(state.entities.ingredients)