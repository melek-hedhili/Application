import React, { useState, useEffect, useRef, Component } from 'react';
import InscriptionNum from '../Login/InscriptionNum.js';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
    ActivityIndicator,
} from 'react-native';
import normalize from 'react-native-normalize';
export default class InputOTPScreen extends Component {
    componentDidMount() {
        this._unsubscribe = this.props.navigation.addListener('focus', () => {
            var code = this.props.route.params.verifyCode;
            if (this.state.verifyCode != code) {
                this.setState({ verifyCode: code });
            }
        });
        console.log('verifycode:', this.state.verifyCode);
    }

    componentWillUnmount() {
        this._unsubscribe();
    }
    constructor(props) {
        super(props);
        var code = this.props.route.params.verifyCode;
        this.state = {
            pin1: '',
            pin2: '',
            pin3: '',
            pin4: '',
            codeActivationFromClient: '',
            verifyCode: code,
            focused: false,
            focused2: false,
            focused3: false,
            focused4: false,
            enabled: true,
        };
    }

    handleFocus = () => this.setState({ focused: true });
    handleBlur = () => this.setState({ focused: false });

    handleFocus2 = () => this.setState({ focused2: true });
    handleBlur2 = () => this.setState({ focused2: false });

    handleFocus3 = () => this.setState({ focused3: true });
    handleBlur3 = () => this.setState({ focused3: false });

    handleFocus4 = () => this.setState({ focused4: true });
    handleBlur4 = () => this.setState({ focused4: false });

    render() {
        const { pin1, pin2, pin3, pin4 } = this.state;
        return (
            <View style={styles.container}>
                <Text
                    style={{
                        textAlign: 'center',
                        color: '#9FA5C0',
                        fontSize: normalize(15),
                        fontFamily: 'arial',
                        fontWeight: 'bold',
                        marginTop: normalize(60),
                        letterSpacing: 1,
                    }}>
                    Nous avons envoye un code de verification
        </Text>
                <View
                    style={{
                        justifyContent: 'space-evenly',
                        flexDirection: 'row',
                        marginTop: normalize(32),
                    }}>
                    <TextInput
                        maxLength={1}
                        keyboardType="numeric"
                        ref={'pin1ref'}
                        onBlur={() => this.handleBlur()}
                        onFocus={() => this.handleFocus()}
                        style={{
                            backgroundColor: 'white',
                            fontWeight: '600',
                            alignSelf: 'center',
                            padding: normalize(10),
                            fontSize: normalize(34),
                            height: normalize(72),
                            width: normalize(72),
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: this.state.focused ? '#CB5C17' : '#D0DBEA',
                            textAlign: 'center',
                        }}
                        onChangeText={pin1 => {
                            this.setState({ pin1: pin1 });
                            if (pin1 != '') {
                                this.refs.pin2ref.focus();
                            }
                        }}
                        value={pin1}
                    />

                    <TextInput
                        onBlur={() => this.handleBlur2()}
                        onFocus={() => this.handleFocus2()}
                        maxLength={1}
                        keyboardType="numeric"
                        ref={'pin2ref'}
                        style={{
                            backgroundColor: 'white',
                            fontWeight: '600',
                            alignSelf: 'center',
                            padding: 10,
                            fontSize: normalize(34),
                            height: normalize(72),
                            width: normalize(72),
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: this.state.focused2 ? '#CB5C17' : '#D0DBEA',
                            textAlign: 'center',
                        }}
                        onChangeText={pin2 => {
                            this.setState({ pin2: pin2 });
                            if (pin2 != '') {
                                this.refs.pin3ref.focus();
                            }
                        }}
                        value={pin2}
                    />

                    <TextInput
                        onBlur={() => this.handleBlur3()}
                        onFocus={() => this.handleFocus3()}
                        maxLength={1}
                        keyboardType="numeric"
                        ref={'pin3ref'}
                        onChangeText={pin3 => {
                            this.setState({ pin3: pin3 });
                            if (pin3 != '') {
                                this.refs.pin4ref.focus();
                            }
                        }}
                        value={pin3}
                        style={{
                            backgroundColor: 'white',
                            fontWeight: '600',
                            alignSelf: 'center',
                            padding: 10,
                            fontSize: normalize(34),
                            height: normalize(72),
                            width: normalize(72),
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: this.state.focused3 ? '#CB5C17' : '#D0DBEA',
                            textAlign: 'center',
                        }}
                    />

                    <TextInput
                        onBlur={() => this.handleBlur4()}
                        onFocus={() => this.handleFocus4()}
                        maxLength={1}
                        keyboardType="numeric"
                        ref={'pin4ref'}
                        onChangeText={pin4 => this.setState({ pin4: pin4 })}
                        value={pin4}
                        style={{
                            backgroundColor: 'white',
                            fontWeight: '600',
                            alignSelf: 'center',
                            padding: 10,
                            fontSize: normalize(34),
                            height: normalize(72),
                            width: normalize(72),
                            borderRadius: 20,
                            borderWidth: 1,
                            borderColor: this.state.focused4 ? '#CB5C17' : '#D0DBEA',
                            textAlign: 'center',
                        }}
                    />
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btnContainer}
                    onPress={() => this.verifying()}
                    enabled={this.state.enabled}>
                    {this.state.enabled ? (
                        <Text
                            style={{
                                color: 'white',
                                fontSize: normalize(15),
                                fontWeight: 'bold',
                                letterSpacing: 0.7,
                                fontFamily: 'arial',
                            }}>
                            Verifier
                        </Text>
                    ) : (
                            <ActivityIndicator size={normalize(40)} color="white" />
                        )}
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={styles.btnContainerRetour}>
                    <Text
                        style={{
                            color: '#9FA5C0',
                            fontSize: normalize(15),
                            fontWeight: 'bold',
                            letterSpacing: 0.7,
                            fontFamily: 'arial',
                        }}>
                        Envoyer a nouveau
          </Text>
                </TouchableOpacity>
            </View>
        );
    }
    verifying = codeActivationFromClient => {
        //check how many clicks were made

        console.log('clicked');
        this.setState({ enabled: false });

        this.setState(
            {
                codeActivationFromClient:
                    this.state.pin1 + this.state.pin2 + this.state.pin3 + this.state.pin4,
            },
            this.verify,
        );
    };
    verify = () => {
        console.log(
            'codeActivationFromClient : ',
            this.state.codeActivationFromClient,
        );
        if (this.state.verifyCode == this.state.codeActivationFromClient) {
            console.log('code correct !');
            this.setState({ enabled: true });
            this.props.navigation.navigate('Signup');
        } else {
            console.log('Verify code is not correct!');
            this.setState({ enabled: true });
            alert('Verify code is not correct!');
        }
    };
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F8',
    },
    Input: {
        backgroundColor: 'white',
        fontWeight: '600',
        alignSelf: 'center',
        padding: 10,
        fontSize: normalize(34),
        height: normalize(72),
        width: normalize(72),
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#D0DBEA',
        textAlign: 'center',
    },
    btnContainer: {
        backgroundColor: '#CB5C17',
        height: normalize(56),
        width: normalize(327),
        resizeMode: 'contain',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

        marginTop: normalize(97),
    },
    btnContainerRetour: {
        backgroundColor: '#FFFFFF',
        height: normalize(56),
        width: normalize(327),
        resizeMode: 'contain',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: '#D0DBEA',
        borderWidth: 1,

        marginTop: normalize(30),
    },
});
