import {combineReducers, legacy_createStore as createStore} from "redux";
import postReducer from "./post-reducer";
import messageReducer from "./message-reducer";
import newsReducer from "./news-reducer";
import musicReducer from "./music-reducer";
import friendsReducer from "./friends-reducer";

let reducers = combineReducers({
    PostPage: postReducer,
    MessagesPage: messageReducer,
    NewsPage: newsReducer,
    MusicPage: musicReducer,
    FriendsPage: friendsReducer
});

let store = createStore(reducers);
export default store;