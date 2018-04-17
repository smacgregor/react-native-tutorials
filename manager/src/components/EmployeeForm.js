import React, { PureComponent } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { employeeUpdate } from '../actions';

class EmployeeForm extends PureComponent {
  onChangeName = value => {
    this.props.employeeUpdate({ prop: 'name', value });
  };

  onPhoneChanged = value => {
    this.props.employeeUpdate({ prop: 'phone', value });
  };

  onPickerChanged = value => {
    this.props.employeeUpdate({ prop: 'shift', value });
  };

  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            value={this.props.name}
            placeHolder="Jane"
            onChangeText={this.onChangeName}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            value={this.props.phone}
            placeHolder="555-5555"
            onChangeText={this.onPhoneChanged}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={this.onPickerChanged}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate
})(EmployeeForm);
