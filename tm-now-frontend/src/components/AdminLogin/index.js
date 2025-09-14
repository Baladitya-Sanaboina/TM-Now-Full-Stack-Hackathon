import { Component } from "react";
import Cookies from "js-cookie";
import { Navigate,redirect } from "react-router-dom";
import "./index.css";
const backendUrl = "http://localhost:5000";

class AdminLogin extends Component {
  state = {
    username: "",
    password: "",
    showSubmitError: false,
    redirectToHome: false,
    redirectToAdmin: false,
  };
  checkCookie = () => {
    const token = Cookies.get("jwtToken");
   if(!token){
    <Navigate to = "/admin-login" replace/>;
   }
   else{
    redirect("/admin-tasks-approval",{replace:true})
   }
  }

  componentDidMount(){
    this.checkCookie();
  } 

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  submitForm = async(event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const requestBody = {email: username, password: password};
    const url = "http://localhost:5000/api/auth/admin/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    };
    const response = await fetch(url, options);
    const data = await response.json();
 if (response.ok) {
      Cookies.set("jwtToken", data.token);
      this.setState({ redirectToHome: true });
      Navigate("/admin-tasks-approval", { replace: true });
    } else {
      this.setState({ showSubmitError: true });
    }
  };

  renderPasswordField = () => {
    const { password } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    );
  };

  renderUsernameField = () => {
    const { username } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    );
  };

  render() {
    const { showSubmitError, redirectToHome, redirectToAdmin } = this.state;
    const jwtToken = Cookies.get("jwtToken");

    

    return (
      <div className="login-form-container">
        <img
          src="https://res.cloudinary.com/dq3pwfv9f/image/upload/v1757827055/ll_mwlfuz.webp"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://res.cloudinary.com/dbylngblb/image/upload/v1725810406/ecommerce_login_epdede.png"
          className="login-image"
          alt="website login"
        />

        <form className="form-container" onSubmit={this.submitForm}>
          <h1>Admin</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && (
            <p className="error-message">*Wrong Credentials</p>
          )}
        </form>
      </div>
    );
  }
}

export default AdminLogin;