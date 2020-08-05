import React from "react";
// import SearchResultsContainer from "./search_results"
import { Link, Redirect } from "react-router-dom";


class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = { param: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchRecipe(this.props.match.params.param)
    // }

    handleSubmit(e) {
        e.preventDefault();

        const searchResults = this.props.fetchSearchRecipes(e.currentTarget.value).then((response) => {
            this.props.history.push("/search-results")
        }, (err) => {
            this.props.history.push("/search-results")
        })
        // return <Redirect recipes={searchResults} to="/search-results" component={SearchResultsContainer} />
    };

    update() {
        return (e) => this.setState({ param: e.currentTarget.value })
    }

    render() {
        return (
            <div className="search-form-container-container">
                <section className="search-form-close-button">
                    <div><Link className="search-form-close-button-label" to="/">x</Link></div>
                </section>
                <div className="search-form-container">
                    <div className="search-bar-container">
                        <section className="search-bar-icon-container">
                            <i className="fas fa-search fa-1.5x"></i>
                        </section>
                        <form onSubmit={this.handleSubmit} className="search-bar-input-container">
                            <input
                                autoCapitalize="off"
                                placeholder="Search recipes"
                                className="search-bar-input"
                                type="text"
                                value={this.state.param}
                                onChange={this.update('param')}
                            />
                        </form>                    
                    </div>
                    <div className="recent-searches-container">
                        <label className="recent-searches-label">Recent Searches:</label>
                        <p className="recent-searches-list">List of Recent Searches Placeholder</p>
                    </div>
                </div>
            </div>
        );
    };
};

export default Search;