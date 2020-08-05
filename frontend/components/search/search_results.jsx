import React from "react";
import { Link } from "react-router-dom"

class SearchResults extends React.Component {
    render() {
        const { recipes, unNomRecipe, nomRecipe } = this.props

        if (recipes.length === 0) return null;

        let recipeCount = recipes.length;

        const recipeLis = recipes.map((recipe) => {
            return (
                <ul key={recipe.id} className="recipe-index-recipe-container">
                    <Link to={`/recipes/${recipe.id}`} >
                        <div className="recipe-index-cropped-img">
                            <img className="recipe-index-thumbnail" src={recipe.imageUrl} alt={recipe.title} />
                        </div>
                    </Link>
                    <div className="recipe-index-bottom-container">
                        <li className="recipe-index-details-container">
                            <Link className="recipe-index-recipe-title" to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
                            <br></br>
                            <a className="recipe-index-recipe-creator" href="#" >{recipe.creator}</a>
                        </li>
                        <li className="nom-button-wrapper">
                            <button className="nom-block-button" onClick={() => nomRecipe(recipe.id)}>
                                <div className="nom-icon-container">
                                    <img className="nom-icon" src="https://theyumyumclub.com/wp-content/uploads/2019/01/Yummly-Button-2.png" alt="Yum Button" />
                                </div>
                                <br></br>
                                <p className="nom-counter" >{recipe.noms}</p>
                            </button>
                        </li>
                    </div>
                </ul>
            );
        });

        return (

            <section className="recipe-index-container">
                <div className="recipe-index-header-recipes-container">
                    <h1 className="recipe-index-header">{recipeCount} Search Results</h1>
                    <div className="recipe-index-recipes-container">
                        {recipeLis}
                    </div>
                </div>
            </section>
        );
    };
};

export default SearchResults;