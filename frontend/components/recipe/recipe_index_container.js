import { connect } from "react-redux";
import { fetchRecipes } from "../../actions/recipe_actions";
import { selectRecipes } from "../../reducers/selectors_reducer";
import RecipeIndex from "./recipe_index";

const mSTP = (state) => {
    return {
        recipes: selectRecipes(state),
    };
};

const mDTP = (dispatch) => {
    return {
        fetchRecipes: () => dispatch(fetchRecipes()),
    };
};

export default connect(mSTP, mDTP)(RecipeIndex)