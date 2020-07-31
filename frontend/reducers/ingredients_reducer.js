import { RECEIVE_RECIPE } from "../actions/recipe_actions";

const ingredientsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    
    let ingredients;

    switch (action.type) {
        case RECEIVE_RECIPE:
            ingredients = action.payload.ingredients;
            return Object.assign({}, oldState, ingredients)
        default:
            return oldState;
    };
};

export default ingredientsReducer