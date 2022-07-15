import React from "react";
import Navigation from "./Navigation";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        friendsPage: state.FriendsPage.FriendsData,
    }
}
let mapDispatchToProps = () => {
    return {

    }
}

const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default NavigationContainer;