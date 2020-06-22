import React, {useState} from 'react';
import ListItemComponent from './ListItemComponent';

const ListItem = ({item, deleteItem, openEditor, changeCompleted}) => {

    const handlePress = () => {
        changeCompleted(item)
    }

    return(
        <ListItemComponent
            item={item}
            deleteItem={deleteItem}
            openEditor={openEditor}
            handlePress={handlePress}
        />
    );
}

export default ListItem;