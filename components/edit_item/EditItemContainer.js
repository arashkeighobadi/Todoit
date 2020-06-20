import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Button, TextInput, Alert} from 'react-native'


const EditItem = (props) => {
    const [text, setText] = useState(props.editableItem.text)
    const [btnMsg, setBtnMsg] = useState('DONE')
    // const [isCollapsed, setIsCollapsed] = useState(false)
    
    const handleChange = (text) => {
        setText(text)
    }

    const handlePress = () => {
        if (!text) {
            Alert.alert(
                'Error', 
                'You need to enter some text first!', 
                [{text: 'Ok'}]
            )
        }
        else {
            props.editItem(props.editableItem.id, text)
            // setText('OK!')
        }
    }

    //If any item in the array (2nd param) changes, it runs the function (1st param)
    useEffect(() => setText(props.editableItem.text), [props.editableItem.text])

    if(!props.isEditInProgress){
        return null
    }

    return( 
        <View style={styles.view}>
            <TextInput 
                name='editItem'
                value={text}
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

export default EditItem