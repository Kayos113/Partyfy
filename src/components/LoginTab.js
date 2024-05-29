import React from "react";

function LoginTab(props) {

  return (

    <div className={"Login Tab hidden"}>
      <div className="Username Input-field">
        <p className="Label">Username/Email</p>
        <input type="text" className="Textfield" id="username"/>
      </div>
      <div className="Password Input-field">
        <p className="Label">Password</p>
        <input type="text" className="Textfield" id="password"/>
      </div>
      <div className="Submit Input-field">
        <input type="submit" className="Login-submit Button" id="login"/>
      </div>
    </div>

  )

}

export default LoginTab;
