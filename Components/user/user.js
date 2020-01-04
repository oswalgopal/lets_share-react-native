import React from 'react';
import {View, Button, TextInput, Text, StyleSheet} from 'react-native';
var api = new Api();
import Icon from 'react-native-vector-icons/Ionicons';
import {Api} from '../../Providers/api';
export default class user extends React.Component {
  constructor() {
    super();
    this.state = {
      access_code: '',
    };
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

  /**
   * function to check the access code
   * */
  checkAccessCode() {
    const param = {
      api: '/check_access_code',
      data: {
        access_code: this.state.access_code,
      },
    };
    api.postApi(param).then(res => {
      console.log(res);
      if (res.response[0].check_access_code) {
        this.props.navigation.navigate('ShowDataUser', {
            access_code: this.state.access_code,
        });
      } else {
        window.alert('Invalid access Code');
      }
    }).catch(err => {
      window.alert('something went wrong');
    });
  }

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
            onChangeText={(text) => this.setState({access_code: text})}
            value={this.state.text}
          />
          <Icon.Button name={'md-checkmark-circle'}
                       backgroundColor={'#fff'}
                       color={'#5e74c2'}
                       style={styles.icon}
                       size={45}
                       onPress={this.checkAccessCode.bind(this)}
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
