import React, {useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Button, TextInput, Alert} from 'react-native'


const AddItem = ({addItem}) => {
    const [text, setText] = useState('')
    const [btnMsg, setBtnMsg] = useState('ADD')
    const [placeHolder, setPlaceHolder] = useState('Enter an Item to add...')
    const [isCollapsed, setIsCollapsed] = useState(false)
    
    const handleChange = (text) => {
        setText(text)
    }

    const handlePress = () => {
        if(!isCollapsed){
            setBtnMsg('OK')
            setIsCollapsed(true)
        }
        else if (!text) {
            Alert.alert(
                'Error', 
                'You need to enter some text first!', 
                [{text: 'Ok'}]
            )
        }
        else {
            addItem(text)
            setBtnMsg('ADD')
            setIsCollapsed(false)
        }
    }

    if(!isCollapsed){
        return(
            <View style={styles.view}>
                <TouchableOpacity
                    onPress={handlePress}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>{btnMsg}</Text>
                </TouchableOpacity> 
            </View>
        )
    }

    return(
        <View style={styles.view}>
            <TextInput 
                name='addItem' 
                placeholder={placeHolder}
                style={styles.input}
                onChangeText={(text) => handleChange(text)}
            />
            <TouchableOpacity
                onPress={handlePress}
                style={styles.button}
            >
                <Text style={styles.buttonText}>{btnMsg}</Text>
            </TouchableOpacity> 
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor: 'lightblue'
    },
    input: {
        flexWrap: 'wrap',
        height: 60,
        fontSize: 23,
        backgroundColor: 'lightgreen'
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
})

export default AddItem