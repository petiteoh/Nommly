import { connect } from "react-redux";
import { selectRecipeIngredients } from "../../reducers/selectors_reducer";
import { fetchRecipe, nomRecipe } from "../../actions/recipe_actions"
import RecipeShow from "./recipe_show";

const mSTP = (state, ownProps) => {
    
    const recipe = state.entities.recipes[ownProps.match.params.recipeId] //returns a recipe object
    
    return {
        ingredients: selectRecipeIngredients(state, recipe),
        recipe,
    };
};

const mDTP = (dispatch) => {
    return {
        fetchRecipe: (recipeId) => dispatch(fetchRecipe(recipeId)),
        nomRecipe: (recipeId) => dispatch(nomRecipe(recipeId)), 
    };
};

export default connect(mSTP, mDTP)(RecipeShow);