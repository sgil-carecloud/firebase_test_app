import React from "react";
import firebase from "./firebase";
class Home extends React.Component {
  state = {
    idToken: ""
  };

  onClick = () => {
    firebase
      .auth()
      .currentUser.getIdToken(true)
      .then(idToken => {
        this.setState({ idToken });
      })
      .catch(function(error) {
        console.error("hello");
      });
  };

  logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  };

  render() {
    return (
      <div>
        Home
        <div>
          <button type="submit" onClick={this.onClick}>
            get id token
          </button>

          <button onClick={this.logout}>logout</button>
        </div>
        <div>IdToken: {this.state.idToken}</div>
      </div>
    );
  }
}
export default Home;
