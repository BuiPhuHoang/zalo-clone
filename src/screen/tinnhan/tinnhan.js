import React, { Component } from "react";
import axios from 'axios'
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  FlatList,
  Dimensions
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import IonIcon from "react-native-vector-icons/Ionicons";
import moment from "moment";

const { width: widthScreen } = Dimensions.get("screen");
export const data = [
  {
    id: 123123,
    name: "Hoang",
    avatar:
      "https://cdn1.iconfinder.com/data/icons/faces-and-emotions/32/what_up_emotion_face_avatar_emoji-512.png",
    lastMessage: {
      content: "hihi",
      time: "2019-04-01 12:00:12"
    }
  },
  {
    id: 1221,
    name: "su",
    avatar:
      "https://cdn1.iconfinder.com/data/icons/faces-and-emotions/32/what_up_emotion_face_avatar_emoji-512.png",
    lastMessage: {
      content: "bo oi",
      time: "2019-04-01 18:10:12"
    }
  },
  {
    id: 212125,
    name: "me",
    avatar:
      "https://cdn1.iconfinder.com/data/icons/faces-and-emotions/32/what_up_emotion_face_avatar_emoji-512.png",
    lastMessage: {
      content: "haha",
      time: "2019-04-02 22:00:12"
    }
  }
];
export default class TinNhan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textSearch: "",
   

    };
  }
  componentDidMount() {
    axios.get('https://facebook.github.io/react-native/movies.json').then(res=>{
      this.setState({
        data:res.data
      })
      console.log(res)
    })
  
  }
  render() {
    const {data}=this.state;
    return (
      <View>
        <View
          style={{
            backgroundColor: "blue",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10
            }}
          >
            <FeatherIcon name="search" size={30} color="#fff" />
            <TextInput
              placeholder="Tìm bạn bè, tin nhắn..."
              onChangeText={text => {
                this.setState({ textSearch: text });
              }}
              placeholderTextColor="#FFF"
              underlineColorAndroid="transparent"
            />
          </View>
          <View style={{ marginRight: 10 }}>
            <FeatherIcon name="plus" size={30} color="#fff" />
          </View>
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Image
            style={{ width: 20, height: 20, borderRadius: 10 }}
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLTjMTj6eNhYLofxMXZVTzSneTjXMm2fiM5lkJ95ZsUT_bM-mq"
            }}
          />
          <Text>Bạn bè đang online</Text>
        </View>
        <View>
          <Text>{data && data.description}</Text>
        </View>
        

     
        <FlatList
          data={data}
          renderItem={({ item, index }) => {
            return (

              <View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: 10,
                    width: widthScreen,
                    alignItems:'center'
                  }}
                >
                  <Image
                      source={{ uri: item.avatar }}
                      style={{ width: 50, height: 50, borderRadius: 25 }}
                    />
                  <View style={{ flex: 1, margin: 10 }}>
                  
                    <View style={{ flexDirection: "row", margin: 5, justifyContent:'space-between', alignItems:'center' }}>
                      <Text style={{ fontFamily: "vincHand", fontSize: 15 }}>
                        {item.name}
                      </Text>
                      <Text style={{ marginTop: 10 }}>
                        {moment().diff(
                          moment(item.lastMessage.time, "YYYY-MM-DD HH:mm:ss"),
                          "hours"
                        )}{" "}
                        gio truoc
                      </Text>
                    </View>
                    <Text>{item.lastMessage.content}</Text>
                  </View>
                </View>
                <View
                  style={{
                    width: widthScreen,
                    height: 1,
                    backgroundColor: "gray"
                  }}
                />
              </View>
            );
          }}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}
