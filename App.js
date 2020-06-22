import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TextInput, Alert} from 'react-native';

import Login from './components/login/LoginContainer';
import Register from './components/register/RegisterContainer';
import Header from './components/header/HeaderContainer';
import ListItem from './components/list_item/ListItemContainer';
import AddItem from './components/add_item/AddItemContainer';
import EditItem from './components/edit_item/EditItemContainer';

const App = () => {
  const SERVER_IP = '192.168.100.52';
  const SERVER_PORT = '3000';
  const URL = `http://${SERVER_IP}:${SERVER_PORT}`;

  const [items, setItems] = useState([]);
  const [editableItem, setEditableItem] = useState({});
  const [isEditInProgress, setIsEditInProgress] = useState(false);
  const [serverMsg, setServerMsg] = useState('testing server ...');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(true);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    queryServer('/connect').then(obj => {
      setServerMsg(obj.text);
    }).catch(error => setServerMsg(error.message));
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

  function login(credentials) {
    let {email, password} = credentials;

    if(!email) {
      Alert.alert(
        'Error', 
        "Email field can't be empty!", 
        [{text: 'Ok'}]
      )
    }
    else if(!password) {
      Alert.alert(
        'Error', 
        "Password field can't be empty!", 
        [{text: 'Ok'}]
      )
    }
    else {
      postData('/login', credentials)
      .then((response) => {
        switch(response.code) {
          case 1:
            getAllTodosFromServer(credentials.email);
            setIsLoggedIn(true);
            setServerMsg(response.text);
            setEmail(credentials.email);
            showComponent('App');
            break;
          case 2:
            setServerMsg(response.text);
            break;
          case 3:
              setServerMsg(response.text);
            break;
          case 4:
              setServerMsg(response.text);
            break;
          default:
            setServerMsg('Something Strange happened...' + response.text);
            break;
        }
      })
      .catch(err => setServerMsg('catched:' + err));
    }
  }

  function getAllTodosFromServer(email){
    postData('/fetch-todos', {email: email})
    .then(response => {
      setServerMsg(response.text);
      setItems(response.data);
    })
    .catch(err => setServerMsg(err.message));
  }

  function register(credentials){
    let {email, password1, password2, age} = credentials;
    if(!email){
      Alert.alert(
        'Error', 
        "Email field can't be empty!", 
        [{text: 'Ok'}]
      )
    }
    else if(!password1 || !password2 || (password1.length < 3) || (password1 != password2)){
      Alert.alert(
        'Error', 
        "+Password must be at least 3 characters.\n+Passwords must match.", 
        [{text: 'Ok'}]
      )
    }
    else if( !age || isNaN(age) || (age < 18) ){
      Alert.alert(
        'Error', 
        "+Age field can't be empty.\n+Age field must contain only numeric values.\n+You must at least 18 years old to register.", 
        [{text: 'Ok'}]
      )
    }
    else {
      setServerMsg('age: ' + age);
      postData('/register', credentials)
      .then(response => {
        switch (response.code) {
          case 1:
            setServerMsg(response.text);
            setEmail('');
            showComponent('Login');
            break;
          case 2:
            setServerMsg(response.text);
            break;
          case 3:
            setServerMsg(response.text); 
            break;
          default:
            setServerMsg('Something Strange happened...' + response.text);
            break;
        }
      })
    }
  }

  const deleteItem = (id) => {
    postData('/delete-todo', {email, id})
    .then(response => {
      setServerMsg(response.text);
      getAllTodosFromServer(email);
    })
    .catch(err => setServerMsg(err.message));
  }

  const addItem = (text) => {
    postData('/add-todo', {text: text, email: email})
    .then(response => {
      setServerMsg(response.text)
    }).then(() => {
      setItems(prevState => {
        getAllTodosFromServer(email);
      })
    })
    .catch(error => setServerMsg(error.message));
  }
  
  const editItem = (id, text) => {
    setEditableItem({});
    postData('/edit-todo', {id: id, text: text})
    .then(response => {
      // temporary solution (No need to fetch everything)
      getAllTodosFromServer(email);
      setServerMsg(response.text);
      setIsEditInProgress(false)
    })
    .catch(err => setServerMsg(err.message));
  }

  const openEditor = (item) => {
    setEditableItem(item);
    setIsEditInProgress(true);
  }

  const changeCompleted = (item) => {

    postData('/edit-todo', {id: item.id, completed: item.completed})
    .then(response => {
      getAllTodosFromServer(email);
      setServerMsg(response.text);
    })
    .catch(err => setServerMsg(err.message));


    setItems(prevState => {
      let newState = prevState.map(prevItem => {
        if(prevItem.id === item.id){
          prevItem.completed = !prevItem.completed;
        }
        return prevItem;
      })
      return newState;
    })
  }

  function showComponent(name){
    switch (name) {
      case 'App':
        {
          setIsLoginVisible(false);
          setIsRegisterVisible(false);
        }
        break;
      case 'Login':
        {
          setIsLoginVisible(true);
          setIsRegisterVisible(false);
        }
        break;
      case 'Register':
        {
          setIsLoginVisible(false);
          setIsRegisterVisible(true);
        }
        break;
      default:
        setServerMsg("DEV_LOG: something's wrong in showComponent function")
        break;
    }
  }

  function logout() {
    setIsLoggedIn(false);
    showComponent('Login');
    setServerMsg('You successfully logged out.');
  }

  if(!isLoggedIn) {
    return(
      <View>
        <Login 
          login={login}
          serverMsg={serverMsg}
          isLoggedIn={isLoggedIn}
          isLoginVisible={isLoginVisible}
          showComponent={showComponent}
          email={email}
          setEmail={setEmail}
      />
      <Register 
          register={register}
          serverMsg={serverMsg}
          isLoggedIn={isLoggedIn}
          isRegisterVisible={isRegisterVisible}
          showComponent={showComponent}
      />
      </View>
    )
  }

  return(
    <View style={styles.view}>
      <Header 
        logout={logout}
      />
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

export default App;