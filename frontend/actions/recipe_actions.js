import * as APIUtil from "../util/recipe_api_util";

export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";

const receiveRecipes = (recipes) => ({
    type: RECEIVE_RECIPES,
    recipes
});

const receiveRecipe = (payload) => ({
    type: RECEIVE_RECIPE,
    payload,
});

export const fetchRecipes = () => (dispatch) => {
    return APIUtil.fetchRecipes().then((recipes) => {
        return dispatch(receiveRecipes(recipes))
    });
};

export const fetchRecipe = (recipeId) => (dispatch) => {
    return APIUtil.fetchRecipe(recipeId).then((payload) => {
        return dispatch(receiveRecipe(payload))
    });
};


// const initialState = getState();
// selectAllPokemon(initialState); //=> []

// dispatch(requestAllPokemon());

// const populatedState = getState();
// selectAllPokemon(populatedState); //=> array of pokemon objects!