import React from "react";

const SignUpView = ({ onSubmit, handleGoogleSignUp }) => {
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={onSubmit}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <br />
      <br />
      <button onClick={handleGoogleSignUp}>SignIn with Google</button>
    </div>
  );
};

export default SignUpView;
