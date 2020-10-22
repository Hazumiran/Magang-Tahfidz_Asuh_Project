import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';

var bg = require('../Image/bg1.jpg');
var logo = require('../Image/logo.png');

export default class Splash extends Component {

    constructor(props) {
        super(props);
        setTimeout(() => {
            this.props.navigation.navigate("Login");
        }, 2000);
    }
    render() {
        return (
            <ImageBackground
                source={bg} >
                <View
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={logo}
                        style={{ width: 135, height: 120, marginBottom: 100 }}></Image>
                </View>
            </ImageBackground>
        )
    }

}
