import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [list,setList] = useState([])

  const found = (result) => {
    for(let entry of list){
      if(entry.name==result.name &&
        entry.company==result.company &&
        entry.avatar_url==result.avatar_url){
          return true;
        }
    }
    return false;
  }

  const addToList = (username) => {
    fetch("https://api.github.com/users/"+username).then(res => 
      res.json().then( result =>
          {
            if(result.name!=null && !found(result)){
              setList([...list,result])
            }
          
        }
        )
    )

    
  }

  return (
    <View style={styles.container}>
      <Form add={addToList}/>
      <List list={list}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    paddingTop:30,
  },
});