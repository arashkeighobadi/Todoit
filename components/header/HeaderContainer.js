import React, {useState} from 'react'
import {View, Text} from 'react-native'
import HeaderComponent from './HeaderComponent'

const Header = () => {
    const [text, setText] = useState(
        'Todoit'
    )

    return(
        <HeaderComponent text={text}/>
    )
}

export default Header