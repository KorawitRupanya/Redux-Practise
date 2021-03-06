export interface SystemState {
  userName: string;
  loggedIn: boolean;
}

export const LOGGED_IN = "LOGGED_IN";

export interface LoggedInAction {
  type: typeof LOGGED_IN;
  payload: string;
}

export type SystemActiontype = LoggedInAction;
