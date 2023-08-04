import React from 'react';
import { Image,Text, View } from 'react-native';

type Props = {
    name:string,
    avatar_url:string,
    company:string
}

const Card = ({name,avatar_url,company}:Props) => {
    console.log(avatar_url)

    return(
        <View 
            style={{
                display:'flex',
                flexDirection:'row',
                 marginTop:10,
                 
                 borderTopRightRadius:10,
                 borderBottomRightRadius:10,
                 backgroundColor:"whitesmoke"}}>
            
            <View style={{marginRight:10}}>
                <Image source={{uri:avatar_url}} style={{width:100,height:100}}/>
            </View>
            <View style={{alignSelf:'center',padding:5}}>
                <Text style={{fontSize:40}}>{name}</Text>
                <Text style={{alignSelf:'center'}}>{company}</Text>
            </View>
        </View>
    )
}

export default Card;