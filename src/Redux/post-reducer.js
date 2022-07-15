const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initializationState = {
    PostData: [
        {
            id: 1,
            namePost: 'My first post',
            description: 'Hello, its my first post!',
            images: 'https://img.fonwall.ru/o/2p/canada-moraine-lake-ozero-gory.jpg?route=mid&amp;h=750',
            LikeCount: '23',
            CommentCount: '23',
            RepostCount: '23'
        },
        {
            id: 2,
            namePost: 'Homework',
            description: 'Hello, its my first post!',
            images: 'https://img.fonwall.ru/o/2p/canada-moraine-lake-ozero-gory.jpg?route=mid&amp;h=750',
            LikeCount: '23',
            CommentCount: '23',
            RepostCount: '23'
        },
    ],
    PostElements: {
        newPostText: '',
    }
};

const postReducer = (state = initializationState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7,
                namePost: state.PostElements.newPostText,
                description: 'its description',
                images: 'https://img.fonwall.ru/o/2p/canada-moraine-lake-ozero-gory.jpg?route=mid&amp;h=750',
                LikeCount: 0,
                CommentCount: 0,
                RepostCount: 0
            };
            state.PostData.push(newPost);
            state.PostElements.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.PostElements.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreater = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreater = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}




export default postReducer;
