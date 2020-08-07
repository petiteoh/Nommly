import * as APIUtil from "../util/ingredient_api_util";

export const RECEIVE_INGREDIENTS = "RECEIVE_INGREDIENTS";
export const RECEIVE_USER_PREFERENCE = "RECEIVE_USER_PREFERENCE";

const receiveIngredients = (ingredients) => ({
    type: RECEIVE_INGREDIENTS,
    ingredients,
});

const receiveUserPreference = (preferableId, preferableType) => ({
    type: RECEIVE_USER_PREFERENCE,
    preferableId,
    preferableType,
})

export const fetchIngredients = () => (dispatch) => {
    return APIUtil.fetchIngredients().then((ingredients) => {
        return dispatch(receiveIngredients(ingredients))
    });
};

export const dislikeIngredient = (ingredientId) => (dispatch) => {
    return APIUtil.postUserPreferenceToIngredients(ingredientId).then((ingredientId) => {
        return dispatch(receiveUserPreference(ingredientId))
    });
};

export const unDislikeIngredient = (ingredientId) => (dispatch) => {
    return APIUtil.deleteUserPreferenceToIngredients(ingredientId).then((ingredientId) => {
        return dispatch(receiveUserPreference(ingredientId))
    });
};