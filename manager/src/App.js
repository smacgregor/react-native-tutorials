import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { SafeAreaView } from 'react-native';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAPv_2U78bcqZ-MZhtXFlSX3bUeaeFj4vs',
      authDomain: 'authentication-3e74a.firebaseapp.com',
      databaseURL: 'https://authentication-3e74a.firebaseio.com',
      projectId: 'authentication-3e74a',
      storageBucket: 'authentication-3e74a.appspot.com',
      messagingSenderId: '93689399494'
    });
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
