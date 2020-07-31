import React from "react";
import { Link } from "react-router-dom";

class RecipeShow extends React.Component {
    componentDidMount() {
        this.props.fetchRecipe(this.props.match.params.recipeId);
    };

    render() {
        const { recipe, ingredients } = this.props;
        if (!recipe) return null;
        const ingredientLis = ingredients.map ((ingredient) => {
            return (
                <li key={ingredient.id} className="ingredient">{ingredient.ingredient}</li>
            )
        });

        const ingredientCount = ingredients.length;

        return (
            <div className="recipe-page-container">
                <section className="recipe-details">
                    <li>{recipe.title}</li>
                    <li>{recipe.totalTime}</li>
                    <li>{recipe.calories}</li>
                    <li>{ingredientCount}</li>
                    <li>{recipe.imageUrl}</li>
                    <a href="{recipe.directions}">Read Directions</a>
                </section>
                <section className="description-container">
                    <h3>Description</h3>
                    <li>{recipe.description}</li>
                    <a href={recipe.directions} >Directions</a>
                </section>
                <section className="ingredients-container">
                    <h3>Ingredients</h3>
                    {ingredientLis}
                </section>
            </div>
        )
    };
};

export default RecipeShow;