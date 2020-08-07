import { RECEIVE_RECIPE } from "../actions/recipe_actions";
import { RECEIVE_INGREDIENTS, RECEIVE_USER_PREFERENCE } from "../actions/ingredient_actions"

const ingredientsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    
    let ingredients;

    switch (action.type) {
        case RECEIVE_RECIPE:
            ingredients = action.payload.ingredients;
            return Object.assign({}, oldState, ingredients)
        case RECEIVE_INGREDIENTS:
            ingredients = action.ingredients;
            return Object.assign({}, oldState, ingredients)
        case RECEIVE_USER_PREFERENCE:
            ingredient = action.ingredient
            return Object.assign({}, oldState, { [ingredient.id]: ingredient });
        default:
            return oldState;
    };
};

export default ingredientsReducer