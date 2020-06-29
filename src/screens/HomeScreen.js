import React, { Component } from 'react';
import {Text, Stylesheet, Button, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>  
                <Text>Home Screen</Text>  
                <Button  
                    title="Go to Details"  
                    onPress={() => this.props.navigation.navigate('Details')}  
                />  
            </View>  
        );
    }
}

