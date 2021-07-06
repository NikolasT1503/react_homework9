const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
  newMessageBody: "",
};

export const DialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      state.newMessageBody = action.value;
      return state;
    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      state.messages.push({ id: 6, message: body });
      state.newMessageBody = "";
      return state;
    }
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  value: text,
});
