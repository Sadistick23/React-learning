const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initializationState = {
    UsersData: [

    ],

};

const postReducer = (state = initializationState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                UsersData: state.UsersData.map(users => {
                    if (users.id === action.userId) {
                        return { ...users, followed: true}
                    }
                    return users;
                })
            }
        case UNFOLLOW:
            return  {
                ...state,
                UsersData: state.UsersData.map(users => {
                    if (users.id === action.userId) {
                        return { ...users, followed: false}
                    }
                    return users;
                })
            }
        case SET_USERS: {
            return {
                ...state,
                UsersData: [...state.UsersData, ...action.users]
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => {
    return { type: FOLLOW, userId }
}
export const unFollowAC = (userId) => {
    return { type: UNFOLLOW, userId }
}
export const setUsersAC = (users) => {
    return { type: SET_USERS, users }
}




export default postReducer;
