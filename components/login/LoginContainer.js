import React, {useState} from 'react';
import LoginComponent from './LoginComponent';

const Login = ({login, serverMsg, isLoggedIn, isLoginVisible, showComponent, email, setEmail}) => {
    const [password, setPassword] = useState('');
    const [registerIsVisible, setRegisterIsVisible] = useState(false);

    function handleChange(changed) {
        changed.email ? setEmail(changed.email) : setPassword(changed.password);
    }

    function handlePress(btnText){
        btnText === 'Login' ? login({email, password}) : showComponent('Register');
    }

    if(isLoggedIn || !isLoginVisible)
        return null;

    return(
        <LoginComponent
            serverMsg={serverMsg}
            handleChange={handleChange}
            handlePress={handlePress}
            isLoggedIn={isLoggedIn}
            isLoginVisible={isLoginVisible}
        />
    )
}

export default Login;