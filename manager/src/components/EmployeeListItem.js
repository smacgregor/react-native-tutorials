import React, { PureComponent } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

class EmployeeListItem extends PureComponent {
  onPress = () => {
    Actions.employeeEdit({ employee: this.props.employee });
  };

  render() {
    const { name, phone, shift } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default EmployeeListItem;
