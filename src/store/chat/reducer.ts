import {
  ChatState,
  SEND_MESSAGE,
  ChatActionTypes,
  CLEAR_MESSAGE
} from "./type";

const initialState: ChatState = {
  message: []
};

export function chatReducer(
  state = initialState,
  action: ChatActionTypes
): ChatState {
  switch (action.type) {
    case SEND_MESSAGE: {
      return {
        ...state,
        message: [...state.message, action.payload]
      };
    }
    case CLEAR_MESSAGE: {
      return {
        ...state,
        message: []
      };
    }
    default:
      return state;
  }
}
