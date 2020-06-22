import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import Login from './components/login/LoginContainer';
import Register from './components/register/RegisterContainer';
import Header from './components/header/HeaderContainer';
import ListItem from './components/list_item/ListItemContainer';
import AddItem from './components/add_item/AddItemContainer';
import EditItem from './components/edit_item/EditItemContainer';

const AppComponent = ({
    logout, 
    showComponent, 
    changeCompleted, 
    openEditor, 
    editItem, 
    deleteItem,
    addItem,
    register, 
    login,
    items,
    editableItem,
    isEditInProgress,
    serverMsg,
    isLoggedIn,
    isLoginVisible,
    isRegisterVisible,
    email,
    setEmail,
}) => {

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
        keyExtractor={item => item.id.toString()}
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
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 10
  },
  text: {
    fontSize: 23
  },
});

export default AppComponent;