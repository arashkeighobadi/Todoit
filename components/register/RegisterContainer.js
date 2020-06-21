import React, {useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'

const Register = ({register, serverMsg, isLoggedIn, isRegisterVisible, showComponent}) => {
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [age, setAge] = useState(0);

    function handleChange(changed) {
        if(changed.email)
            setEmail(changed.email);
        else if(changed.password1)
            setPassword1(changed.password1);
        else if(changed.password2)
            setPassword2(changed.password2)
        else if(changed.age)
            setAge(changed.age)
        else
            console.log("something's wrong in ./components/register/registerContainer, handleChange method.");

        // changed.email ? 
        //     setEmail(changed.email) : 
        //     changed.password1 ? 
        //         setPassword1(changed.password1) : 
        //         changed.password2 ?
        //             setPassword2(changed.password2) :
        //             setAge(changed.age);
    }

    function handlePress(btnText){
        btnText === 'Register' ? register({email, password1, password2, age}) : showComponent('Login');
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

const styles = {
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
}

export default Register