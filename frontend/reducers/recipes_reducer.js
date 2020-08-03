import { RECEIVE_RECIPE, RECEIVE_RECIPES, RECEIVE_NOM } from "../actions/recipe_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const recipeReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    let recipe;
    switch (action.type) {
        case RECEIVE_RECIPES:
            return Object.assign({}, oldState, action.recipes);
        case RECEIVE_RECIPE:  
            debugger
            recipe = action.payload.recipe;
            return Object.assign({}, oldState, { [recipe.id]: recipe });
        case RECEIVE_CURRENT_USER:
            debugger
            const recipes = action.recipes;
            return Object.assign({}, oldState, recipes);
            // if (recipes.length > 0) {
            //     return Object.assign({}, oldState, recipes);
            // } else {
            //     return Object.assign({}, oldState);
            // }
        case RECEIVE_NOM:
            recipe = action.recipe;
            return Object.assign({}, oldState, { [recipe.id]: recipe });
        default:
            return oldState;   
    };
};

export default recipeReducer;