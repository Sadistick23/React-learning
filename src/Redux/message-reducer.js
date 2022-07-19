const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initializationState = {
    MessageData: [
        {id: 1, who: "you", msg: 'Hello!'},
        {id: 2, who: "you", msg: 'How are u?'},
        {id: 3, who: "my", msg: 'I am fine. U?'},
        {id: 4, who: "you", msg: 'Can u give me pen?'},
    ],
    UsersData: [
        {
            id: 1,
            name: 'Maksim',
            avatar: 'https://igra4.ru/wp-content/uploads/2019/12/4675e38ad2a7ce99b0627bec81823772.png'
        },
        {
            id: 2,
            name: 'Olga',
            avatar: 'https://igra4.ru/wp-content/uploads/2019/12/4675e38ad2a7ce99b0627bec81823772.png'
        },
        {
            id: 3,
            name: 'Sergey',
            avatar: 'https://igra4.ru/wp-content/uploads/2019/12/4675e38ad2a7ce99b0627bec81823772.png'
        },
        {
            id: 4,
            name: 'Polina',
            avatar: 'https://igra4.ru/wp-content/uploads/2019/12/4675e38ad2a7ce99b0627bec81823772.png'
        },
        {
            id: 5,
            name: 'Sveta',
            avatar: 'https://igra4.ru/wp-content/uploads/2019/12/4675e38ad2a7ce99b0627bec81823772.png'
        },
    ],
    newMessageText: '',
}

const messageReducer = (state = initializationState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let body = state.newMessageText;
            return  {
                ...state,
                newMessageText: '',
                MessageData: [...state.MessageData, { id: 5, who: "my", msg: body}],
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return  {
                ...state,
                MessageData: [...state.MessageData],
                newMessageText: action.newText,
            };
        default:
            return state;
    }
}

export const addMessageActionCreater = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateNewMessageTextActionCreater = (body) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newText: body }
}


export default messageReducer;




