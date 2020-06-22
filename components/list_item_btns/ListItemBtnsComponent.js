import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';

const ListItemBtnsComponent = ({item, deleteItem, openEditor}) => {
    return(
        <View>
            <TouchableOpacity
                onPress={() => deleteItem(item.id)}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity> 
            <TouchableOpacity
                onPress={() => openEditor(item)}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity> 
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 2,
        borderColor: '#eee'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    listItemText: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontSize: 23,
        marginRight: 10
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

export default ListItemBtnsComponent;