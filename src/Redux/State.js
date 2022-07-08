const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSGAE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        MessagesPage: {
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
            MessageElement: {
                newMessageText: 'Hello!'
            }
        },
        PostPage: {
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
                newPostText: ''
            }
        },
        FriendsPage: {
            FriendsData: [
                {id: 1, FriendsAvatar: 'https://a.d-cd.net/1a424f2s-960.jpg'},
                {id: 2, FriendsAvatar: 'https://pbs.twimg.com/media/C5f27vtWYAIn6hV.jpg'},
                {id: 3, FriendsAvatar: 'https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-48.jpg'},
                {id: 4, FriendsAvatar: 'https://uprostim.com/wp-content/uploads/2021/03/image056-90.jpg'},
                {id: 4, FriendsAvatar: 'https://uprostim.com/wp-content/uploads/2021/03/image086-77.jpg'},
                {id: 4, FriendsAvatar: 'https://pixelbox.ru/wp-content/uploads/2021/04/cats-ava-steam-5.jpg'},
            ]
        },
        MusicPage: {
            MusicPlaylistData: [
                {
                    id: 1,
                    Author: 'MAYOT, SEEMEE',
                    NameMusic: 'SCUM OFF THE POT 2',
                    images: 'https://avatars.yandex.net/get-music-content/6201394/ffbd0be0.a.22810726-1/200x200'
                },
                {
                    id: 2,
                    Author: 'BUSHIDO ZHO',
                    NameMusic: 'vodila',
                    images: 'https://avatars.yandex.net/get-music-content/5966316/49a32305.a.22857468-1/200x200'
                },
                {
                    id: 3,
                    Author: 'INSTASAMKA',
                    NameMusic: 'QUEEN OF RAP',
                    images: 'https://avatars.yandex.net/get-music-content/6214856/f6aee222.a.22823205-1/200x200'
                },
                {
                    id: 4,
                    Author: 'Thomas Mraz, Joseph',
                    NameMusic: 'Это тебе',
                    images: 'https://avatars.yandex.net/get-music-content/5496390/127898d5.a.22814244-1/200x200'
                },
                {
                    id: 5,
                    Author: 'Пошлая Молли, Молодой Платон',
                    NameMusic: 'ШКОЛЬНИК',
                    images: 'https://avatars.yandex.net/get-music-content/6296749/858a940f.a.22823435-1/200x200'
                },
                {
                    id: 6,
                    Author: 'Dose, FEDUK',
                    NameMusic: 'Ты',
                    images: 'https://avatars.yandex.net/get-music-content/5966316/c1ffef7e.a.22867534-1/200x200'
                },
            ],
            MusicAuthorData: [
                {
                    id: 1,
                    Author: 'Валентин Стрыкало',
                    NameMusic: 'Дешевые драмы',
                    images: 'https://avatars.yandex.net/get-music-content/49707/83426a70.p.453589/200x200'
                },
                {
                    id: 2,
                    Author: 'Валентин Стрыкало',
                    NameMusic: 'Наше лето',
                    images: 'https://avatars.yandex.net/get-music-content/49707/83426a70.p.453589/200x200'
                },
                {
                    id: 3,
                    Author: 'Валентин Стрыкало',
                    NameMusic: 'Кайен',
                    images: 'https://avatars.yandex.net/get-music-content/49707/83426a70.p.453589/200x200'
                },
                {
                    id: 4,
                    Author: 'Валентин Стрыкало',
                    NameMusic: 'Я бью женщин и детей',
                    images: 'https://avatars.yandex.net/get-music-content/49707/83426a70.p.453589/200x200'
                },
                {
                    id: 5,
                    Author: 'Валентин Стрыкало',
                    NameMusic: 'Дешёвые драмы',
                    images: 'https://avatars.yandex.net/get-music-content/49707/83426a70.p.453589/200x200'
                },
            ],
        },
        NewsPage: {
            NewsData: [
                {
                    id: 1,
                    AvatarGroup: 'https://sun3.userapi.com/sun3-9/s/v1/ig2/wIJLiVxmtGCHkXooX3J3i_O2raIkt0FRZWfhUV_LjeFOe2zTC-bEP2j7yAXTPX6PVZBU1DFtFOwyJth8cwXenAKU.jpg?size=50x50&quality=96&crop=144,144,1152,1152&ava=1',
                    GroupsName: 'твоя папка с сохранёнками',
                    Description: "Жарко становится...\n" + "\n" + "Не анонимно, пожалуйста.",
                    Date: '2 июл в 22:00',
                    ContentImage1: 'https://sun3.userapi.com/sun3-12/s/v1/if2/VknafCWj5-TpD2U94WASCwD597qtPlDQ8LoUv-PbhjO2DvntqjtIDBudpE84UoCJxZi_tovninRIuneIREY9caKE.jpg?size=1440x1920&quality=96&type=album',
                    ContentImage2: 'https://sun3.userapi.com/sun3-9/s/v1/if2/oq_-62TlDXLp8rnHJurubDi-jmQ5NlaxojeaMriU2xTY37nbG_qU_Wbo1zfCMll_BBbuWi4mkQjCYvprWpQrHHsq.jpg?size=1440x1920&quality=96&type=album',
                    ContentImage3: 'https://cameralabs.org/media/cameralabs/images/Tanya/_II_October/14.10/23stunning-landscape-view-argentina.jpg',
                    ContentImage4: 'https://c.wallhere.com/photos/cf/d6/architecture_g_teborg_gothenburg_architect_chalmers_arkitektur_arkitekt_gertwing_rdh-867149.jpg!d',
                    ContentImage5: 'https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-17.jpg',
                    ContentImage6: 'https://cdn.fishki.net/upload/post/2016/12/02/2153008/chihuahua-na-lugu.jpg',
                    PostAuthor: 'Юлия Красильникова',
                    LikeCount: '354',
                    CommentCount: '34',
                    RepostCount: '34'
                },
                {
                    id: 1,
                    AvatarGroup: 'https://sun3.userapi.com/sun3-9/s/v1/ig2/wIJLiVxmtGCHkXooX3J3i_O2raIkt0FRZWfhUV_LjeFOe2zTC-bEP2j7yAXTPX6PVZBU1DFtFOwyJth8cwXenAKU.jpg?size=50x50&quality=96&crop=144,144,1152,1152&ava=1',
                    GroupsName: 'твоя папка с сохранёнками',
                    Description: 'Жарко становится...\n' + 'Не анонимно, пожалуйста.',
                    Date: '2 июл в 22:00',
                    ContentImage1: 'https://sun3.userapi.com/sun3-12/s/v1/if2/VknafCWj5-TpD2U94WASCwD597qtPlDQ8LoUv-PbhjO2DvntqjtIDBudpE84UoCJxZi_tovninRIuneIREY9caKE.jpg?size=1440x1920&quality=96&type=album',
                    ContentImage2: 'https://sun3.userapi.com/sun3-9/s/v1/if2/oq_-62TlDXLp8rnHJurubDi-jmQ5NlaxojeaMriU2xTY37nbG_qU_Wbo1zfCMll_BBbuWi4mkQjCYvprWpQrHHsq.jpg?size=1440x1920&quality=96&type=album',
                    ContentImage3: 'https://cameralabs.org/media/cameralabs/images/Tanya/_II_October/14.10/23stunning-landscape-view-argentina.jpg',
                    ContentImage4: 'https://c.wallhere.com/photos/cf/d6/architecture_g_teborg_gothenburg_architect_chalmers_arkitektur_arkitekt_gertwing_rdh-867149.jpg!d',
                    ContentImage5: 'https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-17.jpg',
                    ContentImage6: 'https://cdn.fishki.net/upload/post/2016/12/02/2153008/chihuahua-na-lugu.jpg',
                    PostAuthor: 'Юлия Красильникова',
                    LikeCount: '354',
                    CommentCount: '34',
                    RepostCount: '34'
                },
                {
                    id: 1,
                    AvatarGroup: 'https://sun3.userapi.com/sun3-9/s/v1/ig2/wIJLiVxmtGCHkXooX3J3i_O2raIkt0FRZWfhUV_LjeFOe2zTC-bEP2j7yAXTPX6PVZBU1DFtFOwyJth8cwXenAKU.jpg?size=50x50&quality=96&crop=144,144,1152,1152&ava=1',
                    GroupsName: 'твоя папка с сохранёнками',
                    Description: 'Жарко становится...\n' + 'Не анонимно, пожалуйста.',
                    Date: '2 июл в 22:00',
                    ContentImage1: 'https://sun3.userapi.com/sun3-12/s/v1/if2/VknafCWj5-TpD2U94WASCwD597qtPlDQ8LoUv-PbhjO2DvntqjtIDBudpE84UoCJxZi_tovninRIuneIREY9caKE.jpg?size=1440x1920&quality=96&type=album',
                    ContentImage2: 'https://sun3.userapi.com/sun3-9/s/v1/if2/oq_-62TlDXLp8rnHJurubDi-jmQ5NlaxojeaMriU2xTY37nbG_qU_Wbo1zfCMll_BBbuWi4mkQjCYvprWpQrHHsq.jpg?size=1440x1920&quality=96&type=album',
                    ContentImage3: 'https://cameralabs.org/media/cameralabs/images/Tanya/_II_October/14.10/23stunning-landscape-view-argentina.jpg',
                    ContentImage4: 'https://c.wallhere.com/photos/cf/d6/architecture_g_teborg_gothenburg_architect_chalmers_arkitektur_arkitekt_gertwing_rdh-867149.jpg!d',
                    ContentImage5: 'https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-17.jpg',
                    ContentImage6: 'https://cdn.fishki.net/upload/post/2016/12/02/2153008/chihuahua-na-lugu.jpg',
                    PostAuthor: 'Юлия Красильникова',
                    LikeCount: '354',
                    CommentCount: '34',
                    RepostCount: '34'
                },
                {
                    id: 1,
                    AvatarGroup: 'https://sun3.userapi.com/sun3-9/s/v1/ig2/wIJLiVxmtGCHkXooX3J3i_O2raIkt0FRZWfhUV_LjeFOe2zTC-bEP2j7yAXTPX6PVZBU1DFtFOwyJth8cwXenAKU.jpg?size=50x50&quality=96&crop=144,144,1152,1152&ava=1',
                    GroupsName: 'твоя папка с сохранёнками',
                    Description: 'Жарко становится...\n' + 'Не анонимно, пожалуйста.',
                    Date: '2 июл в 22:00',
                    ContentImage1: 'https://sun3.userapi.com/sun3-12/s/v1/if2/VknafCWj5-TpD2U94WASCwD597qtPlDQ8LoUv-PbhjO2DvntqjtIDBudpE84UoCJxZi_tovninRIuneIREY9caKE.jpg?size=1440x1920&quality=96&type=album',
                    ContentImage2: 'https://sun3.userapi.com/sun3-9/s/v1/if2/oq_-62TlDXLp8rnHJurubDi-jmQ5NlaxojeaMriU2xTY37nbG_qU_Wbo1zfCMll_BBbuWi4mkQjCYvprWpQrHHsq.jpg?size=1440x1920&quality=96&type=album',
                    ContentImage3: 'https://cameralabs.org/media/cameralabs/images/Tanya/_II_October/14.10/23stunning-landscape-view-argentina.jpg',
                    ContentImage4: 'https://c.wallhere.com/photos/cf/d6/architecture_g_teborg_gothenburg_architect_chalmers_arkitektur_arkitekt_gertwing_rdh-867149.jpg!d',
                    ContentImage5: 'https://proprikol.ru/wp-content/uploads/2020/08/krasivye-kartinki-kotikov-17.jpg',
                    ContentImage6: 'https://cdn.fishki.net/upload/post/2016/12/02/2153008/chihuahua-na-lugu.jpg',
                    PostAuthor: 'Юлия Красильникова',
                    LikeCount: '354',
                    CommentCount: '34',
                    RepostCount: '34'
                },
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 7,
                namePost: this._state.PostPage.PostElements.newPostText,
                description: 'Hello, its my first post!',
                images: 'https://img.fonwall.ru/o/2p/canada-moraine-lake-ozero-gory.jpg?route=mid&amp;h=750',
                LikeCount: 0,
                CommentCount: 0,
                RepostCount: 0
            };
            this._state.PostPage.PostData.push(newPost);
            this._state.PostPage.PostElements.newPostText = '';
            this._callSubscriber( this._state );
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.PostPage.PostElements.newPostText = action.newText;
            this._callSubscriber( this._state );
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 5,
                who: "my",
                msg: this._state.MessagesPage.MessageElement.newMessageText
            };
            this._state.MessagesPage.MessageData.push(newMessage);
            this._state.MessagesPage.MessageElement.newMessageText = '';
            this._callSubscriber( this._state );
        }   else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.MessagesPage.MessageElement.newMessageText = action.newText;
            this._callSubscriber( this._state );
        }
    }
}

export const addPostActionCreater = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreater = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export const addMessageActionCreater = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateNewMessageTextActionCreater = (text) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
}


export default store;