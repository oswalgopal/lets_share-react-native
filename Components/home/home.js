import React from 'react';
import {
    Text,
    Modal,
    Share,
    TouchableHighlight,
    View,
    StyleSheet,
    StatusBar,
    ProgressBarAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
var api = new Api();
import terms_and_condition from '../T&C/terms_and_condition';
import {Api} from '../../Providers/api';
import {AsyncStorage} from 'react-native';
export default class HomePage extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        /*headerRight: () => (
          /!*<Icon.Button name={'md-information-circle'}
                       backgroundColor={'transparent'}
                       size={35}
          />*!/
        ),*/
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
            modalVisible: false,
            email: '',
            loader: false
        };
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    /**
     * function to share the app
     */
    onShare = async () => {
        try {
            const result = await Share.share({
                message:
                  'Please download my data sharing app',
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };


    /**
     * function to add admin
     */
    AddAdmin() {
        this.setState({
            loader: true,
        });
        const param = {
            api: '/addAdmin',
            data: {
                email: ' ',
            },
        };
        api.postApi(param).then(res => {
            this.setState({
                loader: false,
            });
            console.log(JSON.stringify(res));
            // console.log(res.response.data[0].addadmin);
            AsyncStorage.setItem('accessCode', JSON.stringify(res.response.data[0].addadmin)).then(resp => {
                // console.log('res', res);
                this.props.navigation.navigate('Admin', {
                    access_code: res.response.data[0].addadmin
                });
            }).catch(err => {
                console.log(err);
                window.alert('something went wrong ');
            });
            // const data = AsyncStorage.getItem('accessCode');
            // console.log('data', data);
        }).catch(error => {
            this.setState({
                loader: false
            });
            window.alert('something went wrong ');
            console.log(error);
        });
    }

    /**
     * function to get the data using access code
     */
    getdata() {
        this.props.navigation.navigate('user');
    }

    /**
     * function for privacy policy
     * */
    PrivacyPolicy() {
        this.props.navigation.navigate('privacypolicy');
    }

    /**
     * function for help
     */
    help() {
        this.props.navigation.navigate('help');
    }
    render() {
        return (
          <View>
              <StatusBar backgroundColor="#5e74c2" barStyle="light-content" />
              <Modal
                animationType="slide"
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {
                }}>
                  <View style={{marginTop: 22}}>
                      <View>
                          <Text>Hello World!</Text>
                          <TouchableHighlight
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                              <Text>Hide Modal</Text>
                          </TouchableHighlight>
                      </View>
                  </View>
              </Modal>
              { this.state.loader &&
                <ProgressBarAndroid styleAttr="Horizontal" color="#5e74c2" />
              }
              <View style={styles.View}>
                  <Text style={styles.text}>
                      Select the method for generating the access code or accessing the data
                  </Text>
                  <Icon.Button name={'md-add-circle'}
                               backgroundColor={'#fff'}
                               color={'#5e74c2'}
                               size={150}
                               style={styles.funicon}
                               onPress={this.AddAdmin.bind(this)}/>
                               {/*<Text style={{fontSize: 20}}>Add</Text>*/}
                  <Icon.Button name={'md-arrow-dropdown-circle'}
                               backgroundColor={'#fff'} color={'#03020e'}
                               size={150} style={styles.funicon}
                               onPress={this.getdata.bind(this)}
                  />
              </View>
              <View style={styles.footer}>
                  <Icon.Button name={'md-paper'}
                               backgroundColor={'#fff'} color={'#fff'}
                               size={35} style={styles.bottomicon}
                               onPress={this.PrivacyPolicy.bind(this)}
                  />
                  <Icon.Button name={'md-information-circle'}
                               backgroundColor={'#fff'} color={'#fff'}
                               size={35} style={styles.bottomicon}
                               onPress={() => (this.props.navigation.navigate('terms_and_condition'))}
                  />
                  <Icon.Button name={'md-help-circle'}
                               backgroundColor={'#fff'} color={'#fff'}
                               size={35} style={styles.bottomicon}
                               onPress={this.help.bind(this)}
                  />
                  <Icon.Button name={'md-share'}
                               backgroundColor={'#fff'} color={'#fff'}
                               size={35} style={styles.bottomicon}
                               onPress={this.onShare.bind(this)}
                  />
              </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    funicon: {
        padding: 0,
        margin: 0,
    },
    modal: {
        width: 50,
        height: 50,
    },
    text: {
        marginTop: 30,
        marginBottom: 30,
        fontSize: 20,
        width: '70%',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#5e74c2',
    },
    View: {
        borderColor: 'red',
        color: 'red',
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        height: '100%'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#5e74c2',
        width: '100%',
    },
    bottomicon: {
        backgroundColor: '#5e74c2',
        margin: 0,
        paddingLeft: 25,
        paddingRight: 25,
    },
});
