import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import Login from './components/login/LoginContainer';
import Register from './components/register/RegisterContainer';
import Header from './components/header/HeaderContainer';
import ListItem from './components/list_item/ListItemContainer';
import AddItem from './components/add_item/AddItemContainer';
import EditItem from './components/edit_item/EditItemContainer';

const AppComponent = (props) => {

  if(!props.isLoggedIn) {
    return(
      <View>
        <Login 
          login={props.login}
          serverMsg={props.serverMsg}
          isLoggedIn={props.isLoggedIn}
          isLoginVisible={props.isLoginVisible}
          showComponent={props.showComponent}
          email={props.email}
          setEmail={props.setEmail}
      />
      <Register 
          register={props.register}
          serverMsg={props.serverMsg}
          isLoggedIn={props.isLoggedIn}
          isRegisterVisible={props.isRegisterVisible}
          showComponent={props.showComponent}
      />
      </View>
    )
  }

  return(
    <View style={styles.view}>
      <Header 
        logout={props.logout}
      />
      <Text>{props.serverMsg}</Text>
      <AddItem addItem={props.addItem}/>
      <EditItem 
        editableItem={props.editableItem}
        editItem={props.openEditor}
        isEditInProgress={props.isEditInProgress}
      />
      <FlatList 
        keyExtractor={item => item.id.toString()}
        data={props.items}
        renderItem={
          ({item}) => 
          <ListItem 
            item={item}
            deleteItem={props.deleteItem}
            openEditor={props.openEditor}
            changeCompleted={props.changeCompleted}
            isEditInProgress={props.isEditInProgress}
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