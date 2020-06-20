import React, {useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

import ListItemBtns from '../list_item_btns/listItemBtnsContainer'

const ListItem = ({item, deleteItem, openEditor}) => {
    return(
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{item.text}</Text>
                <ListItemBtns
                    item={item}
                    deleteItem={deleteItem}
                    openEditor={openEditor}
                />
            </View>

        </TouchableOpacity>
    )
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

export default ListItem