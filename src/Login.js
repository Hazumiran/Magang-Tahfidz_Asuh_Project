import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    Dimensions,
    Linking,
    TouchableOpacity, TouchableOpacityBase
} from 'react-native';

import bgImage from '../Image/bg1.jpg'
import logo from '../Image/logo.png'
import Icon from 'react-native-vector-icons/Ionicons'
import Mc from 'react-native-vector-icons/MaterialCommunityIcons'
import Iconse from 'react-native-vector-icons/FontAwesome'

const { width: WIDTH } = Dimensions.get('window')
export default class loglogin extends Component {
    constructor() {
        super()
        this.state = {
            showPass: true,
            press: false
        }
    }

    showPass = () => {
        if (this.state.press == false) {
            this.setState({ showPass: false, press: true })
        } else {
            this.setState({ showPass: true, press: false })
        }
    }

    render() {
        return (

            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.logoText}>Tahfidz Asuh</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name={'ios-person-outline'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Username'}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid='transparent'
                    />
                </View>


                <View style={styles.inputContainer}>
                    <Icon name={'ios-lock-closed-outline'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        secureTextEntry={this.state.showPass}
                        placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                        underlineColorAndroid='transparent'
                    />

                    <TouchableOpacity style={styles.btnEye}
                        onPress={this.showPass.bind(this)}>

                        <Icon name={this.state.press == false ? 'ios-eye-outline' : 'ios-eye-off-outline'} size={26} color={'rgba(255, 255, 255, 0.7)'} />
                    </TouchableOpacity>


                </View>


                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>

                <View style={styles.orText}>
                    <Text style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: 10 }}>or</Text>

                </View>

                <View style={styles.btnContainer}>

                    <TouchableOpacity style={styles.btngoogle}>
                        <Iconse name={'google-plus-circle'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.sosial} />
                        <Text style={styles.text}>Google</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.btnfb}>
                        <Mc name={'facebook'} size={28} color={'rgba(255, 255, 255, 0.7)'} style={styles.sosial} />
                        <Text style={styles.text}>Facebook</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.MainContainer}>
                    <Text style={styles.signUpStyle}>
                        Don't have an account?
                     </Text>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Registration')}>
                        <Text style={styles.signUpStyle}>
                            &nbsp; Sign Up here
                     </Text>
                    </TouchableOpacity>

                </View>
            </ImageBackground>


        )
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50
    },
    logo: {
        width: 135,
        height: 120
    },
    logoText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5
    },
    inputContainer: {
        marginTop: 10
    },
    input: {
        width: WIDTH - 90,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'rgba(255, 255, 255, 0.7)',
        marginHorizontal: 25
    },
    inputIcon: {
        position: 'absolute',
        top: 8,
        left: 37
    },
    btnEye: {
        position: 'absolute',
        top: 8,
        right: 37
    },
    btnLogin: {
        width: WIDTH - 90,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#17386b',
        justifyContent: 'center',
        marginTop: 20
    },
    text: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 16,
        textAlign: 'center'
    },
    btngoogle: {
        width: WIDTH - 275,
        height: 38,
        borderRadius: 20,
        backgroundColor: '#17386b',
        justifyContent: 'center',
        marginTop: 10
    },
    btnfb: {
        width: WIDTH - 275,
        height: 38,
        borderRadius: 20,
        backgroundColor: '#17386b',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sosial: {
        position: 'absolute',
        top: 4,
        left: 15
    },
    MainContainer: {
        top: 18,
        justifyContent: 'space-between',
        flexDirection: 'row',
        left: 7
    },
    signUpStyle: {
        color: 'white',
        fontSize: 15,
        marginTop: 15
    }


});