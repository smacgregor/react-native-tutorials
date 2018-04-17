import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER
} from './types';

export const emailChanged = text => {
  // redux dispatches the action we return here
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = text => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = (email, password) => {
  return dispatch => {
    // redux thunk will call this function right away
    dispatch({ type: LOGIN_USER });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        loginUserSuccess(dispatch, user);
      })
      .catch(() => {
        // attempt to create a new account
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(user => {
            loginUserSuccess(dispatch, user);
          })
          .catch(() => loginUserFailed(dispatch));
      });
  };
};

const loginUserFailed = dispatch => {
  dispatch({ type: LOGIN_USER_FAILED });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  Actions.main();
};
