import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const RegisterComponent = ({handleChange, handlePress, serverMsg, isLoggedIn, isRegisterVisible}) => {
    
    if(isLoggedIn || !isRegisterVisible)
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
                name='password1' 
                placeholder={'Enter password'}
                style={styles.passwordInput}
                onChangeText={(value) => handleChange({password1: value})}
            />
            <TextInput 
                name='password2' 
                placeholder={'Enter password again'}
                style={styles.passwordInput}
                onChangeText={(value) => handleChange({password2: value})}
            />
            <TextInput 
                name='age' 
                placeholder={'Age'}
                style={styles.ageInput}
                onChangeText={(value) => handleChange({age: parseInt(value)})}
            />
            <TouchableOpacity
                onPress={() => handlePress('Register')}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handlePress('Login')}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Have an account?</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    emailInput: {

    },

    passwordInput: {

    },
    ageInput: {

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

export default RegisterComponent;