import _ from 'lodash';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends PureComponent {
  state = { showModal: false };
  componentDidMount() {
    // update our employee update reducer with all of the
    // properties on our employee model.
    // We could also create a new reducer that takes an employee model
    // and updates the properties in one go.
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onSave = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
    });
  };

  onConfirmDelete = () => {
    this.setState({ showModal: true });
  };

  onDecline = () => {
    this.setState({ showModal: false });
  };

  onAccept = () => {
    this.setState({ showModal: false });
    this.props.employeeDelete({ uid: this.props.employee.uid });
  };

  onText = () => {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  };

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onSave}>Save</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onText}>Text Schedule</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onConfirmDelete}>Fire Employee</Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept}
          onDecline={this.onDecline}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete
})(EmployeeEdit);
