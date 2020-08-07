import { connect } from "react-redux";
import ProfileHeader from "./profile_header";

const mSTP = (state) => {
    
    return {
        currentUser: state.entities.users[state.session.id],
    }
};

export default connect(mSTP)(ProfileHeader);