import React from "react";
import { Link } from "react-router-dom";

class RecipeIndex extends React.Component {
    componentDidMount() {
        this.props.fetchRecipes();
    }

    render() {
        const { recipes } = this.props;
        if (recipes.length === 0) return null;
        const recipeLis = recipes.map((recipe) => {
            return (
              <ul key={recipe.id} className="recipe-container">
                <li>
                    <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                    <a href="#" >{recipe.creator}</a>
                </li>
              </ul>
            );
        })

        return (
            <section className="recipe-index-container">
                {/* this is showing */}
                {recipeLis}
            </section>
        );
    };
};

export default RecipeIndex;