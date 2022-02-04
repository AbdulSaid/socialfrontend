import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header>
      <h1>Fake Social Media</h1>
      <nav>
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/auth/signup">
          <div>Signup</div>
        </Link>
        <Link to="/auth/login">
          <div>Login</div>
        </Link>
      </nav>
    </header>
  );
}

export default Navigation;
