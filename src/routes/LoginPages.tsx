import React from "react";
import LoginPanel from "../components/LoginPanel";
import { connect } from "react-redux";
import { AppState } from "../store/configureStore";
import { loggedIn } from "../store/system/actions";
import { RouteComponentProps, withRouter } from "react-router";

interface DispatchToProps {
  loggedIn: (userName: string) => void;
}

type LoginPages = DispatchToProps & RouteComponentProps;

const LoginPages: React.FunctionComponent<LoginPages> = props => {
  const [userName, setUserName] = React.useState("");
  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const handleLogin = (userName: string) => {
    props.loggedIn(userName);
    props.history.push("/chat");
  };
  return (
    <div>
      <LoginPanel
        userName={userName}
        onUserNameChange={handleUserNameChange}
        onLogin={handleLogin}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Function): DispatchToProps => {
  return {
    loggedIn: (userName: string) => dispatch(loggedIn(userName))
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(withRouter(LoginPages));
