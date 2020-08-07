import * as APIUtil from "../util/recipe_api_util";

export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const RECEIVE_RECIPE = "RECEIVE_RECIPE";
export const RECEIVE_NOM = "RECEIVE_NOM";

const receiveRecipes = (recipes) => ({
    type: RECEIVE_RECIPES,
    recipes,
});

const receiveRecipe = (payload) => ({
    type: RECEIVE_RECIPE,
    payload,
});

const receiveNom = (payload) => ({
    type: RECEIVE_NOM,
    recipe: payload.recipe,
    user: payload.user,
});

export const fetchRecipes = () => (dispatch) => {
    return APIUtil.fetchRecipes().then((recipes) => {
        return dispatch(receiveRecipes(recipes))
    });
};

export const fetchSearchRecipes = (param) => (dispatch) => {
    debugger
    return APIUtil.fetchSearchRecipes(param).then((recipes) => {
        return dispatch(receiveRecipes(recipes))
    });
};

export const fetchRecipe = (recipeId) => (dispatch) => {
    return APIUtil.fetchRecipe(recipeId).then((payload) => {
        return dispatch(receiveRecipe(payload))
    });
};

export const nomRecipe = (recipeId) => (dispatch) => {
    return APIUtil.postNomToRecipe(recipeId).then((payload) => {
        return dispatch(receiveNom(payload))
    });
};

export const unNomRecipe = (recipeId) => (dispatch) => {
    return APIUtil.deleteNomFromRecipe(recipeId).then((payload) => {
        return dispatch(receiveNom(payload))
    });
}
