import React, {useState} from 'react';
import ListItemBtnsComponent from './ListItemBtnsComponent';

const ListItemBtns = ({item, deleteItem, openEditor}) => {
    return(
        <ListItemBtnsComponent
            item={item}
            deleteItem={deleteItem}
            openEditor={openEditor}
        />
    );
}

export default ListItemBtns;