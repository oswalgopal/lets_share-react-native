import React from 'react';
import {View, Text} from 'react-native';
export default class Help extends React.Component{
  static navigationOptions = {
    title: 'Help',
    headerStyle: {
      backgroundColor: '#5e74c2',
    },
    headerTitleStyle: {
      color: '#fff',
      textAlign: 'center',
    },
  };
  render() {
    return (
      <View>
        <Text>help</Text>
      </View>
    )
  }
}
