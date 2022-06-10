import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="login-signup">
        <ul className="flex-row-signup">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
        </div>
      );
    } else {
      return (
        <div className="login-signup">
        <ul className="flex-row" >
          <li className="mx-1">
            <Link to="/signup">
              Signup
            
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
        </div>
      );
    }
  }

  return (
    <header className="flex-row-header px-1">
      <h1>
        <Link className= "at-your-doorstep-link" to="/">
          <img
           style={{ width: 45 }}
           className="ayd-logo-class"
           src="images/aydLogo.png"
           alt="Logo"
          />
          <span style={{ textSizeAdjust: '10px', verticalAlign: 'middle'}}>   At Your Doorstep</span>
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
