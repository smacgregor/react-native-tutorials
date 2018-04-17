import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, View, Text } from 'react-native';
import { employeesFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  renderItem = employee => {
    return <EmployeeListItem employee={employee.item} key={employee.uid}/>;
  };

  render() {
    console.log(this.props);
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderItem}
        keyExtractor={item => item.uid}
      />
    );
  }
}

const mapStatesToProps = state => {
  // convert our object into an array of employees
  // lodash map automaticaly puts the mapped objects into an array
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid};
  });
  return { employees };
};

export default connect(mapStatesToProps, {
  employeesFetch
})(EmployeeList);
