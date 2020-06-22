import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity, SnapshotViewIOSComponent} from 'react-native'

const Login = ({login, serverMsg, isLoggedIn, isLoginVisible, showComponent, email, setEmail}) => {
    const [password, setPassword] = useState('')
    const [registerIsVisible, setRegisterIsVisible] = useState(false)

    function handleChange(changed) {
        changed.email ? setEmail(changed.email) : setPassword(changed.password);
    }

    function handlePress(btnText){
        btnText === 'Login' ? login({email, password}) : showComponent('Register');
    }

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

export default Login