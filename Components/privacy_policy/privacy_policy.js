import React from 'react';
import {View, Text} from 'react-native';
export default class PrivacyPolicy extends React.Component{
  static navigationOptions = {
    title: 'Privacy Policy',
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
        <Text>PrivacyPolicy</Text>
      </View>
    )
  }
}
