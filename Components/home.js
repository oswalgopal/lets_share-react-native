import React from 'react';
import { Text, Button, Image, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Api} from './Providers/api';
var api = new Api();
export default class HomePage extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
        headerStyle: {
            backgroundColor: '#5e74c2',
        },
        headerTitleStyle: {
            color: '#fff',
            textAlign: 'center',
        },
    };

    /**
     * function to add admin
     */
    AddAdmin() {
        console.log('admin added');
        api.GetRequest('http://localhost:10000').then(res => {
            console.log(res);
        }).catch(err => {
            console.error(err);
        })
    }
    render() {
        return (
          <View style={styles.View}>
              <Icon.Button name={'md-add-circle'}
                           backgroundColor={'#fff'}
                           color={'#5e74c2'}
                           size={150}
                           style={styles.funicon1}
                           onPress={this.AddAdmin.bind(this)}/>
              <Icon.Button name={'md-add-circle'}
                           backgroundColor={'#fff'} color={'#03020e'}
                           size={150} style={styles.funicon2} />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    View: {
        borderColor: 'red',
        color: 'red',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        height: '100%',
    },
});
