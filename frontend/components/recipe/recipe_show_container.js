import { connect } from "react-redux";
import { selectRecipeIngredients ,selectRecipeIngredient } from "../../reducers/selectors_reducer";
import { fetchRecipe } from "../../actions/recipe_actions"
import RecipeShow from "./recipe_show";

const mSTP = (state, ownProps) => {
    const recipe = state.entities.recipes[ownProps.match.params.recipeId] //returns a recipe object
    return {
        recipe,
        ingredients: selectRecipeIngredients(state, recipe)
    };
};

const mDTP = (dispatch) => {
    return {
        fetchRecipe: (recipeId) => dispatch(fetchRecipe(recipeId)),
    };
};

export default connect(mSTP, mDTP)(RecipeShow);