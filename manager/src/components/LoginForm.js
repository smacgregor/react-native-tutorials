import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange = text => {
    this.props.emailChanged(text);
  };

  onPasswordChange = text => {
    this.props.passwordChanged(text);
  };

  onLoginUser = () => {
    const { email, password } = this.props;
    this.props.loginUser(email, password);
  };

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="small" />;
    }

    return <Button onPress={this.onLoginUser}>Login</Button>;
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="email"
            value={this.props.email}
            placeHolder="email@gmail.com"
            onChangeText={this.onEmailChange}
          />
        </CardSection>
        <CardSection>
          <Input
            value={this.props.password}
            secureTextEntry
            label="password"
            placeHolder="password"
            onChangeText={this.onPasswordChange}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { email, password, error, loading } = state.auth;
  return { email, password, error, loading };
};

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);


