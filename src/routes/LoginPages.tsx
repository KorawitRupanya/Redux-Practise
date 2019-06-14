import React from "react";
import LoginPanel from "../components/LoginPanel";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { login } from "../services/actions";

interface DispatchToProps {
  login: (userName: string) => void;
}

type LoginPages = DispatchToProps & RouteComponentProps;

const LoginPages: React.FunctionComponent<LoginPages> = props => {
  const [userName, setUserName] = React.useState("");
  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };
  const handleLogin = (userName: string) => {
    props.login(userName);
    // props.history.push("/chat");
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
    login: (userName: string) => dispatch(login(userName))
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(withRouter(LoginPages));
