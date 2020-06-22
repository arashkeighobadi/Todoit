import React, {useState, useEffect} from 'react';
import EditItemComponent from './EditItemComponent';

const EditItem = ({editItem, isEditInProgress, editableItem}) => {
    const [text, setText] = useState(editableItem.text);
    const [btnMsg, setBtnMsg] = useState('DONE');
    
    const handleChange = (text) => {
        setText(text);
    }

    const handlePress = () => {
        if (!text) {
            Alert.alert(
                'Error', 
                'You need to enter some text first!', 
                [{text: 'Ok'}]
            );
        }
        else {
            editItem(editableItem.id, text);
        }
    }

    //If any item in the array (2nd param) changes, it runs the function (1st param)
    useEffect(() => setText(editableItem.text), [editableItem.text]);

    return( 
        <EditItemComponent
            isEditInProgress={isEditInProgress}
            text={text}
            btnMsg={btnMsg}
            handlePress={handlePress}
            handleChange={handleChange}
        />
    );
}

export default EditItem;