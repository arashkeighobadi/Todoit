import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'

const Login = ({login, serverMsg}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleChange(changed) {
        changed.email ? setEmail(changed.email) : setPassword(changed.password);
    }

    function handlePress(){
        login({email, password})
    }

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
                onPress={handlePress}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>
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