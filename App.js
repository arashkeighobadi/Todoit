import React, {useState, useEffect} from 'react'
import {View, Text, FlatList, TextInput} from 'react-native'

import Header from './components/header/HeaderContainer'
import ListItem from './components/list_item/ListItemContainer'
import AddItem from './components/add_item/AddItemContainer'
import EditItem from './components/edit_item/EditItemContainer'

const App = () => {
  const SERVER_IP = '192.168.100.52'
  const SERVER_PORT = '3000'
  const URL = `http://${SERVER_IP}:${SERVER_PORT}`;

  const [items, setItems] = useState([
    {id: 1, text: 'todo1', completed: true},
    {id: 2, text: 'todo2', completed: false}
    // {id: 3, text: ''},
    // {id: 4, text: 'todo4'},
    // {id: 5, text: 'todo5_______________________very___long___item'},
    // {id: 6, text: 'todo6'},
    // {id: 7, text: 'todo7'},
  ])
  const [editableItem, setEditableItem] = useState({})
  const [isEditInProgress, setIsEditInProgress] = useState(false)
  const [serverMsg, setServerMsg] = useState('testing server ...')

  useEffect(  () => {
    queryServer('/connect').then(obj => {
      setServerMsg(obj.text)
    }).catch(error => setServerMsg(error.message))

    // let testItem = items.filter(item => item.id === 2)[0]
    // setServerMsg(testItem.text)
    // postData('/add-todo', testItem);
  }, [])

  async function queryServer(route) {
      const response = await fetch(URL + route, {
        headers: {
          'Content-Type': 'application/json'
        },
      });
      return response.json();
  }

  async function postData(route = '', data = {}) {
    const response = await fetch(URL + route, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return response.json();
  }


  const deleteItem = (id) => {
    setItems(prevState => 
      prevState.filter(item => item.id != id)
    )
  }

  const addItem = (text) => {
    postData('/add-todo', {text: text})
    .then(response => {
      setServerMsg(response.text)
    }).then(() => {
      setItems(prevState => {
        let newState = prevState.map(item => item)
        newState.unshift({id: prevState.length+1, text: text})
        return newState
      })
    })
    .catch(error => setServerMsg(error.message));
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

  const changeCompleted = (item) => {

    setItems(prevState => {
      let newState = prevState.map(prevItem => {
        if(prevItem.id === item.id){
          prevItem.completed = !prevItem.completed
        }
        return prevItem
      })
      return newState;
    })
  }

  return(
    <View style={styles.view}>
      <Header />
      <Text>{serverMsg}</Text>
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
            changeCompleted={changeCompleted}
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