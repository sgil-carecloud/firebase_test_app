import React, { Component } from "react";
import { withRouter } from "react-router";
import firebase from "../firebase";

import SignUpView from "../SignUp/SignUpView";

class SignUpContainer extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  handleGoogleSignUp = () => {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(result => {
        this.props.history.push("/");
      });
  };

  handleSamlSignUp = async event => {
    event.preventDefault();
    const provider = new firebase.auth.SAMLAuthProvider("saml.CareCloud");
    console.log("in here");

    try {
      const user = await firebase.auth().signInWithPopup(provider);
      // const user = await firebase.auth().signInWithRedirect(provider);
      this.props.history.push("/");
    } catch (e) {
      console.log("error: ", e);
    }
  };

  render() {
    return (
      <SignUpView
        onSubmit={this.handleSignUp}
        handleGoogleSignUp={this.handleGoogleSignUp}
        handleSamlSignUp={this.handleSamlSignUp}
      />
    );
  }
}

export default withRouter(SignUpContainer);
