import React, { Component } from "react";
import { Text, View, TextInput, Image } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

import { data } from '../tinnhan/tinnhan';

export default class News extends Component {
  render() {
    return (
      <View>
        <View style={{backgroundColor:'blue', justifyContent:'space-around',flexDirection:'row', alignItems:'center'}}>
         
            <FeatherIcon name="chevron-left" size={30} color="#fff" />
            <Text style={{color:'#fff',fontSize:20,marginVertical:10}}>Bình luận</Text>
            <FeatherIcon name="more-horizontal" size={30} color="#fff"/>
         </View>
         <View>
           <Image source={{uri:data[0].avatar}}
           style={{width:50, height:50,borderRadius:25}}
           />
         </View>
  
      </View>
    );
  }
}
