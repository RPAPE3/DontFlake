import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="nav navbar-nav navbar-right d-flex flex-row">
          <li style={{ paddingRight: '20px',}}>
            <Link to="/orderHistory" style={{ textDecoration: 'none'}}>
              Profile 
            </Link>
          </li>
          <li style={{ paddingRight: '20px'}}>
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" style={{ textDecoration: 'none'}} onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav navbar-nav navbar-right d-flex flex-column flex-row-reverse">
          <li style={{ paddingRight: '20px',}}>
            <Link to="/signup" style={{ textDecoration: 'none'}}>
              Signup
            </Link>
          </li>
          <li style={{ paddingRight: '20px'}}>
            <Link to="/login" style={{ textDecoration: 'none'}}>
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header>
      <nav className="navbar navbar-default navbar-fixed-top border-bottom box-shadow">
        <Link to="/" style={{ textDecoration: 'none'}}> 
        <div className="container container-fluid">
          <img class="icon" src="https://i.imgur.com/kz7TuDa.png" alt="iconOne" border="0" style={{ width: '25px', height:'25px'}}></img>
          WYD
          </div>
        </Link>
      <ul className='navbar-nav d-flex flex-row-reverse'>
        {showNavigation()}
      </ul>
      </nav>

    </header>
  );
}

export default Nav;