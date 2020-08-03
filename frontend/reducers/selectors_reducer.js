export const selectRecipes = state => Object.values(state.entities.recipes);

export const selectRecipeIngredients = (state, recipe) => {
  debugger
  return recipe && Object.keys(state.entities.ingredients).length > 0 ? recipe.ingredientIds.map(id => state.entities.ingredients[id]) : [];
};

export const selectRecipeIngredient = (state, id) => {
  return state.entities.ingredients[id];
};

export const selectNommedRecipes = (state, nommedRecipeIds) => {
  debugger
  return nommedRecipeIds ? nommedRecipeIds.map(nommedRecipeId => state.entities.recipes[nommedRecipeId]) : [];
} 