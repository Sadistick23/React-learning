let initializationState = {
    FriendsData: [
        {id: 1, FriendsAvatar: 'https://a.d-cd.net/1a424f2s-960.jpg'},
        {id: 2, FriendsAvatar: 'https://pbs.twimg.com/media/C5f27vtWYAIn6hV.jpg'},
        {id: 3, FriendsAvatar: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg'},
        {id: 4, FriendsAvatar: 'https://uprostim.com/wp-content/uploads/2021/03/image056-90.jpg'},
        {id: 4, FriendsAvatar: 'https://uprostim.com/wp-content/uploads/2021/03/image086-77.jpg'},
        {id: 4, FriendsAvatar: 'https://pixelbox.ru/wp-content/uploads/2021/04/cats-ava-steam-5.jpg'},
    ]
}

const friendsReducer = (state = initializationState, action) => {
    return state;
}

export default friendsReducer;