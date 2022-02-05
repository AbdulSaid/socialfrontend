import { password } from "pg/lib/defaults";
import React, { useState } from "react";

function SignupForm() {
  const [values, setVales] = useState({
    email: "",
    password: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create Account</h2>
        </div>
        <form className="form-wrapper">
          <div className="email">
            <label className="label">Email</label>
            <input className="input" type="text" name="email" />
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input className="input" type="passsword" name="password" />
          </div>
          <div>
            <button className="submit" onClick={handleFormSubmit}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
