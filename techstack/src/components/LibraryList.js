import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList, Text } from 'react-native';
import FlatListItem from './FlatListItem';

class LibraryList extends React.PureComponent {
  renderItem = ({ item }) => <FlatListItem key={item.id} library={item} />;

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={item => item.id.toString()}
      />
    );
  }
}

const mapStateToProps = state => {
  // forge a connection between our applications state
  // and our component which wants that state
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
