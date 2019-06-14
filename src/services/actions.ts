import { LoggedInAction, LOGGED_IN } from "../store/system/type";
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import * as loginService from "../../src/services/loginService";
import { AppState } from "../store/configureStore";

export function loggedIn(userName: string): LoggedInAction {
  return {
    type: LOGGED_IN,
    payload: userName
  };
}

export function login(
  userName: string
): ThunkAction<void, AppState, null, Action<string>> {
  return (dispatch: Function) => {
    loginService
      .login(userName)
      .then(value => {
        if (value) {
          dispatch(loggedIn(userName));
        }
      })
      .catch(reason => {
        console.log(reason);
      });
  };
}
