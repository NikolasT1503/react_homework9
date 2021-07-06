import {ProfileReducer} from './ProfileReducer';
import {DialogsReducer} from './DialogsReducer';
import {SidebarReducer} from './SidebarReducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Пост 1", likesCount: 12 },
        { id: 2, message: "Пост 2", likesCount: 15 },
        { id: 3, message: "Пост 3", likesCount: 11 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Андрей" },
        { id: 2, name: "Николай" },
        { id: 3, name: "Алексей" },
      ],
      messages: [
        { message: "Сообщение 1" },
        { message: "Сообщение 2" },
        { message: "Сообщение 3" },
      ],
      newMessageBody: ''
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = ProfileReducer(this._state.profilePage, action);
    this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = SidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
};

export default store;
window.store = store;
