import React,{useState} from 'react';

import { Button, TextInput, View } from 'react-native';

type Props = {
    add: (username:string) => void
}


const Form = ({add}:Props) => {
    const [username,setUsername] = useState("");

    return(
        <View style={{flexDirection:'row'}}>
            <TextInput 
                style={{
                    borderStyle:'solid', 
                    borderWidth:1,
                    paddingLeft:10,
                    borderTopLeftRadius:10,
                    borderBottomLeftRadius:10,
                    backgroundColor:"white"}} 
                onChangeText={e => setUsername(e)} 
                value={username}/>
            <Button title='Add Git-Card' onPress={() => {add(username);setUsername("")}}/>
        </View>
    )
}

export default Form;