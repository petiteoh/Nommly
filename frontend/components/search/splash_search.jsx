import React from "react";
import { Link } from "react-router-dom";

class SplashSearch extends React.Component {
    constructor(props) {
        super(props);

        this.state = { param: "" };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.history.push(`/search-results?query=${this.state.param}`)
    };

    update() {
        return (e) => this.setState({ param: e.currentTarget.value })
    }

    render() {
        return (
            <div className="splash-container">
                <div className="splash-search-background-images">
                    <div className="base-image">
                        <img className="marble" src="https://x.yummlystatic.com/web/banner-marble-bkg.jpg" alt=""/>
                    </div>
                    <div className="top-left-image">
                        <img className="strawberry-bowl" src="https://x.yummlystatic.com/web/strawberry-grain.png" alt=""/>
                    </div>
                    <div className="top-right-image">
                        <img className="blueberry-bowl" src="https://x.yummlystatic.com/web/img-fruit-bowl.png" alt=""/>
                    </div>
                    <div className="slight-top-right-image">
                        <img className="strawberry" src="https://x.yummlystatic.com/web/img-strawberry.png" alt=""/>
                    </div>
                </div>
                <div className="splash-search-container">
                    <div className="splash-search-bar-container">
                        <Link to="/search" className="splash-search-bar-input-container">
                            <section className="splash-search-bar-icon-container">
                                <i className="fas fa-search fa-1.5x"></i>
                            </section>
                            <input
                                autoCapitalize="off"
                                placeholder="Search a million recipes & more"
                                className="splash-search-bar-input"
                                type="text"
                                value={this.state.param}
                                onChange={this.update('param')}
                            />
                        </Link>
                    </div>
                    <div className="splash-search-message">
                        <label className="splash-search-message-small">
                            <p>Personalize your experience</p>
                        </label>
                        <label className="splash-search-message-big">
                            <p>What are your favorite cuisines?</p>
                        </label>
                        <section className="splash-search-cuisine-container">
                            <div className="splash-search-bubble-images">
                                <Link className="bubble-link" to="/search-results?query=american">
                                    <label>American</label>
                                    <img src="https://x.yummlystatic.com/web/bubble/cuisine/american.png" alt="american-cuisine-image"></img>
                                </Link>
                                <Link className="bubble-link" to="/search-results?query=indian">
                                    <label>Indian</label>
                                    <img src="https://x.yummlystatic.com/web/bubble/cuisine/indian.png" alt="indian-cuisine-image"></img>
                                </Link>
                                <Link className="bubble-link" to="/search-results?query=malaysian">
                                    <label>Malaysian</label>
                                    <img src="https://x.yummlystatic.com/web/bubble/cuisine/moroccan.png" alt="malaysian-cuisine-image"></img>
                                </Link>
                                <Link className="bubble-link" to="/search-results?query=mexican">
                                    <label>Mexican</label>
                                    <img src="https://x.yummlystatic.com/web/bubble/cuisine/mexican.png" alt="mexican-cuisine-image"></img>
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        );
    };
};

export default SplashSearch;