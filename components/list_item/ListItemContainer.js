import React, {useState} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

import ListItemBtns from '../list_item_btns/listItemBtnsContainer'

const ListItem = ({item, deleteItem, openEditor, changeCompleted}) => {

    const handlePress = () => {
        changeCompleted(item)
    }

    const listItemTextStyle =  {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        fontSize: 23,
        marginRight: 10,
        alignItems: 'center',
        textDecorationLine: item.completed ? 'line-through' : ''
    }

    return(
        <View style={styles.listItemView}>
            <TouchableOpacity 
                style={styles.listItemTouchable}
                onPress={handlePress}
            >
                <Text style={listItemTextStyle}>{item.text}</Text>
            </TouchableOpacity>
            <ListItemBtns
                item={item}
                deleteItem={deleteItem}
                openEditor={openEditor}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listItemView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 2,
        borderColor: '#eee'
    },
    
    listItemTouchable: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
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