import React, {useState} from 'react'
import {View, Text, FlatList, TextInput} from 'react-native'

import Header from './components/header/HeaderContainer'
import ListItem from './components/list_item/ListItemContainer'
import AddItem from './components/add_item/AddItemContainer'
import EditItem from './components/edit_item/EditItemContainer'

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'todo1_______________________very___long___item'},
    {id: 2, text: 'todo2'},
    {id: 3, text: ''},
    {id: 4, text: 'todo4'},
    {id: 5, text: 'todo5'},
    {id: 6, text: 'todo6'},
    {id: 7, text: 'todo7'},
  ])
  const [editableItem, setEditableItem] = useState({})
  const [isEditInProgress, setIsEditInProgress] = useState(false)

  const deleteItem = (id) => {
    setItems(prevState => 
      prevState.filter(item => item.id != id)
    )
  }

  const addItem = (text) => {
    setItems(prevState => {
      let newState = prevState.map(item => item)
      newState.unshift({id: prevState.length+1, text: text})
      return newState
    })
  }

  const editItem = (id, text) => {
    setEditableItem({})
    setItems(prevState => 
      prevState.map(item => {
        if(item.id === id){
          item.text = text
        }
        return item
      })
    )
    setIsEditInProgress(false)
  }

  const openEditor = (item) => {
    setEditableItem(item)
    setIsEditInProgress(true)
  }

  return(
    <View style={styles.view}>
      <Header />
      <AddItem addItem={addItem}/>
      <EditItem 
        editableItem={editableItem}
        editItem={editItem}
        isEditInProgress={isEditInProgress}
      />
      <FlatList 
        data={items}
        renderItem={
          ({item}) => 
          <ListItem 
            item={item} 
            deleteItem={deleteItem}
            openEditor={openEditor}
            isEditInProgress={isEditInProgress}
          />
        }
      />
      <Text style={styles.text}>Here's some text</Text>
    </View>
  )
}

const styles = {
  view: {
    flex: 1,
    paddingTop: 10
  },
  text: {
    fontSize: 23
  },
}

export default App