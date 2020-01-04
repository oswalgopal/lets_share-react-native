import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet, ProgressBarAndroid,
} from 'react-native';
import {Api} from '../../Providers/api';
var api = new Api();
export default class ShowDataUser extends React.Component{
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
  constructor(props) {
    super(props);
    this.state = {
      loader: false,
      accessCode: this.props.navigation.getParam('access_code'),
      showingData: []
    };
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
    api
      .getApi(param)
      .then(res => {
        // console.log(res);
        this.setState({
          showingData: res.response,
          loader: false,
        });
        console.log(this.state.showingData);
      })
      .catch(err => {
        this.setState({
          loader: false,
        });
        console.log(err);
      });
  }
  render () {
    return (
      <View>
        { this.state.loader &&
          <ProgressBarAndroid styleAttr="Horizontal" color="#5e74c2" />
        }
        <Text style={styles.instruction}>
          Access Code for the getting data
        </Text>
        <Text style={styles.accessCode}>
          {this.state.accessCode}
        </Text>
        <ScrollView style={styles.showingDataWrapper}>
          {
            this.state.showingData.map(data => (
              <Text style={styles.showingData}>{data.data}</Text>
            ))
          }
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  accessCode: {
    fontSize: 25,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  instruction: {
    textAlign: 'center',
    paddingTop: 10,
  },
  showingDataWrapper: {
    overflow: 'scroll',
    maxHeight: '85%'
  },
  showingData: {
    width: '85%',
    backgroundColor: '#5e74c2',
    marginRight: 'auto',
    margin: 3,
    padding: 5,
    borderRadius: 5,
  }
})
