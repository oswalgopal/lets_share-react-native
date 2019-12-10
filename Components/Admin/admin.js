import React from 'react';
import {View, Text} from 'react-native';
export default class Admin extends React.Component{
  static navigationOptions = {
    title: '',
    headerStyle: {
      backgroundColor: '#5e74c2',
    },
    headerTitleStyle: {
      color: '#fff',
      textAlign: 'center',
    },
  };
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <Text>
        Hello admin
        </Text>
      </View>
    );
  }
}
