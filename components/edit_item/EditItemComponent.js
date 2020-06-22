import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Button, TextInput, Alert} from 'react-native'


const EditItemComponent = ({isEditInProgress, text, btnMsg, handleChange, handlePress}) => {

    if(!isEditInProgress){
        return null;
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
    );
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
});

export default EditItemComponent;