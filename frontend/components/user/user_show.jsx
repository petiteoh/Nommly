import React from "react";
import { Link } from "react-router-dom";

class UserShow extends React.Component {
    componentDidMount() {
        this.props.fetchRecipes();
    }

    render() {
        const { unNomRecipe, nommedRecipes, currentUser } = this.props;
        if (nommedRecipes.length === 0) return null;
        const nommedRecipesLis = nommedRecipes.map((nommedRecipe) => {
            return (
                <ul key={nommedRecipe.id} className="recipe-index-recipe-container">
                    <Link to={`/recipes/${nommedRecipe.id}`} >
                        <div className="recipe-index-cropped-img">
                            <img className="recipe-index-thumbnail" src={nommedRecipe.imageUrl} alt={nommedRecipe.title} />
                        </div>
                    </Link>
                    <div className="recipe-index-bottom-container">
                        <li className="recipe-index-details-container">
                            <Link className="recipe-index-recipe-title" to={`/recipes/${nommedRecipe.id}`}>{nommedRecipe.title}</Link>
                            <br></br>
                            <a className="recipe-index-recipe-creator" href="#" >{nommedRecipe.creator}</a>
                        </li>
                        <li className="nom-button-wrapper">
                            <button className="nom-block-button" onClick={() => unNomRecipe(nommedRecipe.id)}>
                                <div className="nom-icon-container">
                                    <img className="nom-icon" src={window.nommedIcon} alt="Nom Button" />
                                    {/* <img className="nom-icon" src="https://theyumyumclub.com/wp-content/uploads/2019/01/Yummly-Button-2.png" alt="Yum Button" /> */}
                                </div>
                                <br></br>
                                <p className="nom-counter" >{nommedRecipe.noms}</p>
                            </button>
                        </li>
                    </div>
                </ul>
            );
        });

        if (nommedRecipesLis.length > 0) {
            return (
                    <section className = "recipe-index-container" >
                        <div className="recipe-index-header-recipes-container">
                            <h1 className="recipe-index-header">All Noms</h1>
                                <div className="recipe-index-recipes-container">
                                    {nommedRecipesLis}
                                </div>
                        </div>
                    </section>
            )
        } else {
            return (
                    <section className="recipe-index-container" >
                        <div className="recipe-index-header-recipes-container">
                            <h1 className="recipe-index-header">All Noms</h1>
                                <div className="recipe-index-recipes-container">
                                </div>
                        </div>
                    </section>
            )
        }
    };
};

export default UserShow;