import React, {useState} from 'react';
import RegisterComponent from './RegisterComponent';

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
            setPassword2(changed.password2);
        else if(changed.age)
            setAge(changed.age);
        else
            console.log("something's wrong in ./components/register/registerContainer, handleChange method.");
    }

    function handlePress(btnText){
        btnText === 'Register' ? register({email, password1, password2, age}) : showComponent('Login');
    }

    if(isLoggedIn || !isRegisterVisible)
        return null;

    return(
        <RegisterComponent
            handleChange={handleChange}
            handlePress={handlePress}
            isLoggedIn={isLoggedIn}
            serverMsg={serverMsg}
            isRegisterVisible={isRegisterVisible}
        />
    )
}

export default Register;