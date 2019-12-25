import React from 'react';
import {View, Text} from 'react-native';
export default class TermsAndCondition extends React.Component{
  static navigationOptions = {
    title: 'Terms and Conditions',
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
        <Text>Terms and conditions</Text>
      </View>
    )
  }
}
