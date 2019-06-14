import { LoggedInAction, LOGGED_IN } from "./type";

export function loggedIn(userName: string): LoggedInAction {
  return {
    type: LOGGED_IN,
    payload: userName
  };
}
