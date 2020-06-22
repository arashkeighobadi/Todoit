import React, {useState} from 'react';
import HeaderComponent from './HeaderComponent';

const Header = ({logout}) => {
    const [text, setText] = useState('Todoit');

    function handlePress() {
        logout();
    }

    return(
        <HeaderComponent 
            text={text}
            handlePress={handlePress}
        />
    );
}

export default Header;