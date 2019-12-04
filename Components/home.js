import React from 'react';
import {Text} from 'react-native';
export default class HomePage extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        return (
          <Text>This is my home page</Text>
        )
    }
}
