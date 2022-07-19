import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, togglefollowAC, unFollowAC} from "../../Redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        UsersData: state.UsersPage.UsersData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAC(userId))
        },
        setUser: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;