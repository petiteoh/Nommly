import { connect } from "react-redux";
import { fetchIngredients, dislikeIngredient, unDislikeIngredient } from "../../actions/ingredient_actions";
import { selectIngredients } from "../../reducers/selectors_reducer";
import UserPreference from "./user_preference";

const mSTP = (state) => {
    if (Object.keys(state.entities.ingredients).length === 0)  {
        return {
            ingredients: [],
            currentUser: {},
        };
    } else {
        return {
            ingredients: selectIngredients(state),
            currentUser: state.entities.users[state.session.id],
        }
    }
};

const mDTP = (dispatch) => {
    return {
        fetchIngredients: () => dispatch(fetchIngredients()),
        dislikeIngredient: (ingredientId) => dispatch(dislikeIngredients(ingredientsId)),
        unDislikeIngredient: (ingredientId) => dispatch(unDislikeIngredients(ingredientsId)),
    };
};

export default connect(mSTP, mDTP)(UserPreference);