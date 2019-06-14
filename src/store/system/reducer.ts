import { SystemState, LOGGED_IN } from "./type";

const initialState: SystemState = {
  userName: "",
  loggedIn: false
};

function systemReducer(state = initialState, action: any): SystemState {
  switch (action.type) {
    case LOGGED_IN: {
      return {
        ...state,
        loggedIn: true,
        userName: action.payload
      };
    }
    default:
      return state;
  }
}

export { systemReducer };
