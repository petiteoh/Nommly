import { connect } from "react-redux";
import { unNomRecipe, fetchRecipes } from "../../actions/recipe_actions";
import { selectNommedRecipes } from "../../reducers/selectors_reducer"
import UserShow from "./user_show"

const mSTP = (state) => {
    debugger
    const nommedRecipes = state.entities.users[state.session.id].nommedRecipeIds.map((recipeId) => {
        return state.entities.recipes[recipeId] });
    
    if (Object.keys(state.entities.recipes).length === 0) {
        return {
            nommedRecipes: [],
        }
    } else {
        return {
            nommedRecipes: nommedRecipes,
        }
    }
};

const mDTP = (dispatch) => {
    return {
        unNomRecipe: (recipeId) => dispatch(unNomRecipe(recipeId)),
        fetchRecipes: () => dispatch(fetchRecipes()),
    };
};

export default connect(mSTP, mDTP)(UserShow);