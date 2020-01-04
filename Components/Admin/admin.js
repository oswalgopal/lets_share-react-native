import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ProgressBarAndroid,
  ScrollView,
} from 'react-native';
var api = new Api();
import Icon from 'react-native-vector-icons/Ionicons';
import {Api} from '../../Providers/api';

export default class Admin extends React.Component{
  static navigationOptions = ({navigation}) => {
    return {
      title: ' ',
      headerStyle: {
        backgroundColor: '#5e74c2',
      },
      headerTitleStyle: {
        color: '#fff',
        textAlign: 'center',
      },
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      accessCode: this.props.navigation.getParam('access_code'),
      data: '',
      showingData: [],
      loader: false
    };
    // console.log(this.props.navigation.getParam('access_code'));
    this.getData();
  }

  /**
   * function to get the data for the same access code
   */
  getData() {
    this.setState({
      loader: true
    });
      const param = '/getData/accesscode=' + this.state.accessCode;
      // const param = '/getData/accesscode=64459138';
      api.getApi(param).then(res => {
        // console.log(res);
        this.setState({
          showingData: res.response,
          loader: false
        });
        console.log(this.state.showingData);
      }).catch(err => {
        this.setState({
          loader: false
        });
        console.log(err);
      });
  }

  /**
   * function to add the data
   */
  addData() {
    this.setState({
      loader: true
    });
    const param = {
      api: '/add_data',
      data: {
        access_code: this.state.accessCode,
        data: this.state.data,
      },
    };
    console.log(param);
      api.postApi(param).then(res => {
        console.log(res);
        this.setState({
          data: '',
          loader: false
        });
        this.getData();
      }).catch(err => {
        this.setState({
          data: '',
          loader: false
        });
        window.alert('something went wrong');
        console.log(err);
      });
    // console.log(this.state.data);
  }
  render() {
    return (
      <SafeAreaView style={styles.wrapper}>
        { this.state.loader &&
        <ProgressBarAndroid styleAttr="Horizontal" color="#5e74c2" />
        }
        <Text style={styles.instruction}>
          Join with vv's Lets_share App and enter Access Code
        </Text>
        <Text style={styles.AccessCode}>
          {this.state.accessCode}
        </Text>
        <ScrollView style={styles.showingDataWrapper}>
          {
            this.state.showingData.map(data => (
              <Text style={styles.showingData}>
                {data.data}
              </Text>
            ))
          }
        </ScrollView>
        <View style={styles.addData}>
          <TextInput
            placeholder={'Type your text'}
            onChangeText={(text) => this.setState({data: text})}
            value={this.state.data}
            style={styles.input}
          />
          <Icon.Button name={'md-add-circle'}
                       backgroundColor={'#fff'}
                       color={'#5e74c2'}
                       style={styles.icon}
                       size={45}
                       onPress={this.addData.bind(this)}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
  AccessCode: {
    fontSize: 25,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  instruction: {
    textAlign: 'center',
    paddingTop: 10,
  },
  addData: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  input: {
    width: '83%',
    marginLeft: 'auto',
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 10,
    color: '#5e74c2',
    borderColor: '#5e74c2',
    borderWidth: 1,
    paddingLeft: 5,
  },
  icon: {
    paddingTop: 0,
  },
  showingDataWrapper: {
    maxHeight: '75%',
    overflow: 'scroll',
  },
  showingData: {
    width: '85%',
    backgroundColor: '#5e74c2',
    marginLeft: 'auto',
    margin: 3,
    padding: 5,
    borderRadius: 5,
  }
});
