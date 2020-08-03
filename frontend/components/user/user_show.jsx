import React from "react";
import { Link } from "react-router-dom";

class UserShow extends React.Component {
    constructor(props) {
        super(props)

        // this.state = this.props.nommedRecipes;
    }

    componentDidMount() {
        this.props.fetchRecipes();
    }

    componentDidUpdate(prevProps)  {
        // if ( this.props.nommedRecipes !== prevProps.props.nommedRecipes ) {
        //     this.setState(this.props.nommedRecipes)
        // };
    };

    render() {
        const { unNomRecipe, nommedRecipes } = this.props;
        if (nommedRecipes.length === 0) return null;
        debugger
        const nommedRecipesLis = nommedRecipes.map((nommedRecipe) => {
            debugger
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
                                    <img className="nom-icon" src="https://theyumyumclub.com/wp-content/uploads/2019/01/Yummly-Button-2.png" alt="Yum Button" />
                                </div>
                                <br></br>
                                <p className="nom-counter" >{nommedRecipe.noms}</p>
                            </button>
                        </li>
                    </div>
                </ul>
            );
        });

        return (
            <section className = "recipe-index-container" >
                <h1 className="recipe-index-header">All Noms</h1>
                <div className="recipe-index-recipes-container">
                    {nommedRecipesLis}
                </div>
            </section>
        )
    };
};

export default UserShow;