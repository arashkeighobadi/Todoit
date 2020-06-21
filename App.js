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
  const [serverMsg, setServerMsg] = useState('testing server ...')

  useEffect(  () => {
    // fetch(URL + '/connect').then(response => {
    //   if(response.status === 200) {
    //     return response.text()
    //   }
    //   else {
    //     throw new Error('Something is wrong!')
    //   }
    // }).then(responseText => {
    //   setServerMsg(responseText)
    // }).catch(error => setServerMsg(error.message))

    queryServer('/connect').then(obj => {
      setServerMsg(obj.text)
    })

    let testItem = items.filter(item => item.id === 4)[0]
    setServerMsg(testItem.text)
    postData('/add-todo', testItem);
  }, [])

  async function queryServer(route) {
    // let response = await fetch(URL + route);

    // if (response.ok) { // if HTTP-status is 200-299
    //   // get the response body (the method explained below)
    //   let text = await response.text();
    //   return text
    // } else {
    //   return ("HTTP-Error: " + response.status);
    // }

    // const response = await fetch(URL + route).then(response => {
    //     if(response.status === 200) {
    //       return response.parse()
    //     }
    //     else {
    //       throw new Error('Something is wrong!')
    //     }
    //   }).then(parsedJSON => {
    //     setServerMsg(parsedJSON.text)
    //   }).catch(error => setServerMsg(error.message))
      
      const response = await fetch(URL + route, {
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
  
      // let obj = await response.json()
      // await obj.text ? setServerMsg(obj.text) : setServerMsg('oops!')

      return response.json();
  }

  async function postData(route = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(URL + route, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
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