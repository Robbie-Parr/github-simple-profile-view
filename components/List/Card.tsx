import React from 'react';
import { Image,Text, TouchableOpacity, View,Linking } from 'react-native';

type Props = {
    name:string,
    avatar_url:string,
    company:string,
    html_url:string
}

const Card = ({name,avatar_url,company,html_url}:Props) => {

    return(
        <TouchableOpacity 
            onPress={() => Linking.openURL(html_url)}
            style={{
                display:'flex',
                flexDirection:'row',
                marginTop:10,
                borderTopRightRadius:10,
                borderBottomRightRadius:10,
                backgroundColor:"whitesmoke"}}
                >
            
            <View style={{marginRight:10}}>
                <Image source={{uri:avatar_url}} style={{width:100,height:100}}/>
            </View>
            <View style={{alignSelf:'center',padding:5}}>
                <Text style={{fontSize:40}}>{name}</Text>
                <Text style={{alignSelf:'center'}}>{company}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card;