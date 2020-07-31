import { combineReducers } from "redux";
import usersReducer from "../reducers/users_reducer";
import recipeReducer from "./recipes_reducer";
import ingredientsReducer from "./ingredients_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    recipes: recipeReducer,
    ingredients: ingredientsReducer,
});

export default entitiesReducer;