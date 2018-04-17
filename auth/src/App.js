import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import { Header, Button, Spinner, CardSection } from './components/common';

class App extends Component {
  state = { loggedIn: null };

  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAPv_2U78bcqZ-MZhtXFlSX3bUeaeFj4vs',
      authDomain: 'authentication-3e74a.firebaseapp.com',
      databaseURL: 'https://authentication-3e74a.firebaseio.com',
      projectId: 'authentication-3e74a',
      storageBucket: 'authentication-3e74a.appspot.com',
      messagingSenderId: '93689399494',
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // user has signed in
        this.setState({ loggedIn: true });
      } else {
        // user has signed out
        this.setState({ loggedIn: false });
      }
    });
  }

  onLogout() {
    firebase.auth().signOut();
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case false:
        return <LoginForm />;
      case true:
        return (
          <CardSection>
            <Button onPress={this.onLogout.bind(this)}>Logout</Button>
          </CardSection>
        );
      case null:
        return (
          <View style={styles.centeredSpinnerStyle}>
            <Spinner size="large" />
          </View>
        );
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  centeredSpinnerStyle: {
    paddingTop: 30,
  },
};

export default App;
