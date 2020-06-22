import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const LoginComponent = ({serverMsg, handleChange, handlePress, isLoggedIn, isLoginVisible}) => {

    if(isLoggedIn || !isLoginVisible)
        return null;

    return(
        <View>
            <Text>{serverMsg}</Text>
            <TextInput 
                name='email' 
                placeholder={'Enter email'}
                style={styles.emailInput}
                onChangeText={(value) => handleChange({email: value})}
                />
            <TextInput 
                name='password' 
                placeholder={'Enter password'}
                style={styles.passwordInput}
                onChangeText={(value) => handleChange({password: value})}
            />
            <TouchableOpacity
                onPress={() => handlePress('Login')}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handlePress('Register')}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Not Registered?</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    emailInput: {

    },

    passwordInput: {

    },
    button: {
        margin: 2,
        padding: 5,
        alignItems: 'center',
        backgroundColor: 'darkslateblue'
    },
    buttonText: {
        color: 'white'
    }
});

export default LoginComponent;