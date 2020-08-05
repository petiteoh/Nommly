import { connect } from "react-redux"
import Search from "./search";
// import { selectRecipes } from "../../reducers/selectors_reducer";
import { fetchSearchRecipes } from "../../actions/recipe_actions";

const mSTP = (state) => {
    return {
        // recipes: selectRecipes(state),
    };
};

const mDTP = (dispatch) => {
    return {
        fetchSearchRecipes: (param) => dispatch(fetchSearchRecipes(param)),
    };
};

export default connect(mSTP, mDTP)(Search);