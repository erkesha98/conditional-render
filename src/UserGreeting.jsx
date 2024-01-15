import React from "react";
import PropTypes from 'prop-types'

const UserGreeting = (props) => {
  const welcomeMessage = <h1 className="welcome-message">Welcome,{props.username}</h1>;
  const loginMessage = <h1 className="login-message">Please, log in to continue</h1>;

  return (props.isLoggedIn? welcomeMessage:loginMessage);
};

UserGreeting.propTypes={
    username:PropTypes.string,
    isLoggedIn:PropTypes.bool,
}
UserGreeting.defaultProps={
    username:"Guest",
    isLoggedIn:false,

}


export default UserGreeting;
