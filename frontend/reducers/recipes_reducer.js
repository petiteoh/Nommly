import { RECEIVE_RECIPE, RECEIVE_RECIPES } from "../actions/recipe_actions"

const recipeReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    let recipe;

    switch (action.type) {
        case RECEIVE_RECIPES:
            return Object.assign({}, oldState, action.recipes);
        case RECEIVE_RECIPE:  
            recipe = action.payload.recipe;
            return Object.assign({}, oldState, { [recipe.id]: recipe });
        default:
            return oldState;   
    };
};

export default recipeReducer;