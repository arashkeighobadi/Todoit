import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'

const Register = ({register, serverMsg, isLoggedIn, isRegisterVisible, showComponent}) => {
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    function handleChange(changed) {
        changed.email ? 
            setEmail(changed.email) : 
            changed.password1 ? 
                setPassword1(changed.password1) : 
                setPassword2(changed.password2);
    }

    function handlePress(btnText){
        btnText === 'Register' ? register({email, password1, password2}) : showComponent('Login');
    }

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

const styles = {
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
}

export default Register