import React from 'react';
import {ScrollView, View } from 'react-native';

import Card from './Card';

type Props = {
    list:[{
        id:string,
        name:string,
        avatar_url:string,
        company:string,
        html_url:string
    }]
}


const List = ({list}:Props) => {
    return(
        <View style={{flex:.8, maxHeight:600}}>
            <ScrollView>
                {list.reverse().map((card_details) => <Card key={card_details.id} {...card_details}/>)}
            </ScrollView>
        </View>
    )
}

export default List;