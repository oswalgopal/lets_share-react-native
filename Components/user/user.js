import React from 'react';
import {View, Button, TextInput, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class user extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    }
  }
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
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>
          Enter the access Code to access the data
        </Text>
        <View style={styles.view2}>
          <TextInput
            style={styles.input}
            placeholder="Access Code"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Icon.Button name={'md-checkmark-circle'}
                       backgroundColor={'#fff'}
                       color={'#5e74c2'}
                       style={styles.icon}
                       size={45}
          />
        </View>
        {/*<Text style={styles.text2}>
          how to generate  the access code
        </Text>*/}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {

  },
  text: {
    color: '#5e74c2',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '70%',
  },
  input: {
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: '#5e74c2',
    borderWidth: 2,
    width: '70%',
    // marginTop: 50,
    textAlign: 'center',
  },
  text2: {
    textAlign: 'center',
    marginTop: 70,
  },
  view2: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 50,
    width: '70%',
    marginLeft: '20%',
    marginRight: 'auto',
  },
  icon: {
    color: '#5e74c2',
    margin: 0,
    padding: 0,
    marginRight: 'auto',
  },
});
