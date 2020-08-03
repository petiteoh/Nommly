import React from "react";
import { Link } from "react-router-dom";

class RecipeShow extends React.Component {
    componentDidMount() {
        // debugger
        this.props.fetchRecipe(this.props.match.params.recipeId);
    };

    componentDidUpdate(prevProps) {
        // debugger
        if (prevProps.match.params.recipeId !== this.props.match.params.recipeId) {
            this.props.fetchRecipe(this.props.match.params.recipeId);
        }
    }

    render() {
        const { recipe, ingredients } = this.props;
        debugger
        if ( ingredients.length === 0 || !recipe) return null

        let ingredientLis;
        if (ingredients && recipe) {
            ingredientLis = ingredients.map((ingredient, id) => {
                return (
                    <li key={id} className="ingredient">{ingredient.ingredient}</li>
                )
            });
        }

        const ingredientCount = ingredients.length;

        return (
            <div className="recipe-page-container">
                <section className="recipe-page-details-container">
                    <section className="recipe-page-left-container">
                        <div className="top-details-container">
                            <section className="top-details">
                                <li className="recipe-show-recipe-title">{recipe.title}</li>
                                <li className="recipe-show-recipe-creator">{recipe.creator}</li>
                            </section>
                        </div>
                        <div className="middle-details-container">
                            <section className="middle-details">
                                <div className="ingredients">
                                    <li>{ingredientCount}</li>
                                    <label>Ingredients</label>
                                </div>
                                <div className="minutes"> 
                                    <li>{recipe.totalTime}</li>
                                    <label>Minutes</label>
                                </div>
                                <div className="calories">
                                    <li>{recipe.calories}</li>
                                    <label>Calories</label>
                                </div>
                            </section>
                        </div>
                        <div className="bottom-details-container">
                            <section className="bottom-details">
                                <div className="read-directions-button-container">
                                    <button className="read-directions-button" href="{recipe.directions}">Read Directions</button>
                                </div>
                            </section>
                            <section className="nom-button-wrapper">
                                <button className="nom-block-button" onClick={() => nomRecipe(recipe.id)}>
                                    <div className="nom-icon-container">
                                        <img className="nom-icon" src="https://theyumyumclub.com/wp-content/uploads/2019/01/Yummly-Button-2.png" alt="Yum Button" />
                                    </div>
                                    <br></br>
                                    <p className="nom-counter" >{recipe.noms}</p>
                                </button>
                            </section>
                        </div>
                    </section>
                    <section className="recipe-page-right-container">
                        <section className="right-thumbnail">
                            <img src={recipe.imageUrl} alt={recipe.title}></img>
                        </section>
                    </section>
                </section>
                <div className="hr" ></div>

                <section className="description-ingredients-container">
                    <h3>Description</h3>
                    <section className="description-container">
                        <p>{recipe.description}</p>
                    </section>
                    <h3>Ingredients</h3>
                    <section className="ingredients-container">
                        {ingredientLis}
                    </section>
                </section>
            </div>
        )
    };
};

export default RecipeShow;