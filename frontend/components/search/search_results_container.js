import { connect } from "react-redux";
import SearchResults from "./search_results";
import { fetchSearchRecipes, nomRecipe, unNomRecipe } from "../../actions/recipe_actions";
import { selectRecipes } from "../../reducers/selectors_reducer";

const mSTP = (state) => {
    return {
        recipes: selectRecipes(state),
    };
};

const mDTP = (dispatch) => {
    return {
        nomRecipe: recipeId => dispatch(nomRecipe(recipeId)),
        unNomRecipe: recipeId => dispatch(unNomRecipe(recipeId)),
        fetchSearchRecipes: (param) => dispatch(fetchSearchRecipes(param)),
    };
};

export default connect(mSTP, mDTP)(SearchResults);
