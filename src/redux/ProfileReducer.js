const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Пост 1", likesCount: 12 },
    { id: 2, message: "Пост 2", likesCount: 15 },
    { id: 3, message: "Пост 3", likesCount: 11 },
  ],
  newPostText: "",
};

export const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    }
    case UPDATE_NEW_POST_TEXT: {
      state.newPostText = action.value;
      return state;
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  value: text,
});
