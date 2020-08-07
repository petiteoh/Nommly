import React from "react";
import { Link } from "react-router-dom";

class ProfileHeader extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            bio: "",
            city: "",
            state: "",
            country: "",
            icon_url: this.props.currentUser.icon_url,
        }

        this.update = this.update.bind(this)
    }

    // handleSubmit() {
    //     e.preventDefault();

    //     this.setState(this.state.input = this.currentTarget.value)
    // }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    };

    render() {
        const { currentUser } = this.props;

        return (
            <div className="profile-header-container">
                <div className="top-bar-container">
                    <div className="profile-information-container" >
                        <div className="left-profile-pic-container" >
                            {/* <img src={currentUser.icon_url} alt="profile-picture"/> */}
                            <i className="fa fa-user-circle fa-8x" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="right-info-container">
                        <h3 className="display-name">{currentUser.displayName}</h3>
                        <label className="bio-container">
                            <input 
                                className="bio"
                                placeholder="Tell us about yourself here"
                                type="text"
                                value={this.state.bio}
                                onChange={this.update("bio")} 
                            />
                        </label>  
                        <div className="location-container">
                            <label>
                                <input 
                                    className="city"
                                    placeholder="City"
                                    type="text"
                                    value={this.state.city}
                                    onChange={this.update("city")} 
                                />
                            </label>
                            <label>,
                                <input 
                                    className="state"
                                    placeholder="State"
                                    type="text"
                                    value={this.state.state}
                                    onChange={this.update("state")} 
                                />
                            </label>
                            <label>,
                                <input 
                                    className="country"
                                    placeholder="Country"
                                    type="text"
                                    value={this.state.country}
                                    onChange={this.update("country")} 
                                />
                            </label>
                        </div>  
                    </div>
                </div>
                <div className="bottom-bar-container" >
                    <section className="saved-recipes-link-container">
                        <Link to="/profile">
                            <label className="saved-recipes-link">
                                SAVED RECIPES
                            </label>
                        </Link>
                    </section>
                    <section className="preferences-link-container">
                        <Link to="/user-preferences">
                            <label className="preferences-link">
                                PREFERENCES
                            </label>
                        </Link>
                    </section>
                </div>
            </div>
        )
    }
}

export default ProfileHeader;