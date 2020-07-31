export const selectRecipes = state => Object.values(state.entities.recipes);

export const selectRecipeIngredients = (state, recipe) => {
  return recipe ? recipe.ingredientIds.map(id => state.entities.ingredients[id]) : [];
};

export const selectRecipeIngredient = (state, id) => {
  return state.entities.ingredients[id];
};