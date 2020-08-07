import React from "react";

class UserPreference extends React.Component {
    componentDidMount() {
        this.props.fetchIngredients();
    }

    render() {
        const { ingredients, currentUser, dislikeIngredient, unDislikeIngredient } = this.props;
        
        if (ingredients.length === 0) return null;

        const ingredientLis = ingredients.map((ingredient) => {
            return (
                <li key={ingredient.id} className="ingredient-bubble" onClick={() => dislikeIngredient()}>
                    {ingredient.ingredient}
                </li>
            );
        });

        const dislikedIngredientLis = currentUser.dislikedIngredientIds.map((dislikedIngredient) => {
            return (
                <li key={dislikedIngredient.id} className="disliked-ingredient-bubble" onClick={() => unDislikeIngredient()}>
                    {ingredients[dislikedIngredient.id].ingredient}
                </li>
            )
        })

        return (
            <div className="user-preferences-container">
                <div className="disliked-ingredients-container">
                    <span className="disliked-ingredients-header-container">
                        <h1 className="disliked-ingredients-title">Disliked Ingredients</h1>
                    </span>
                    <span className="disliked-ingredients-sub-header-container">
                        <h1 className="disliked-ingredients-sub-title">Add disliked ingredients to avoid recipes that include them.</h1>
                    </span>
                    <span className="disliked-ingredients-bubble-container">
                        <ul className="disliked-ingredients-bubble">
                            {dislikedIngredientLis}
                        </ul>
                    </span>
                    <span className="ingredients-bubble-container">
                        <ul className="ingredients-bubble">
                            {ingredientLis.filter(dislikedIngredientLis)}
                        </ul>
                    </span>
                </div>
            </div>
        );
    }
}

export default UserPreference;