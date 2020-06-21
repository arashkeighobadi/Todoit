import React, {useState} from 'react'
import {View, Text} from 'react-native'
import HeaderComponent from './HeaderComponent'

const Header = ({logout}) => {
    const [text, setText] = useState(
        'Todoit'
    )

    function handlePress() {
        logout();
    }

    return(
        <HeaderComponent 
            text={text}
            handlePress={handlePress}
        />
    )
}

export default Header