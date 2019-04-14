import React, { Component } from "react";
import { Text, View, TextInput, Image, Dimensions, TouchableOpacity } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
const { width: widthScreen, height } = Dimensions.get("screen");

export default class NhatKy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textSeach: "",
      textSTT: "",
      numberLike:0,
      numberCMT:0,
      isLike: false
    };
  }
  onPressLike = () => {
    this.setState({
      numberLike: !this.state.isLike ? this.state.numberLike+1 : this.state.numberLike-1,
      isLike: !this.state.isLike
    })

  }
  
  render() {
    const {numberLike}=this.state;
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "blue",
            marginHorizoltal: 10,
            marginVerial: 10,
            justifyContent: "space-between"
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <FeatherIcon
              name="search"
              size={30}
              color="#fff"
              style={{ margin: 10 }}
            />
            <TextInput
              style={{ fontSize: 15, color: "#FFF" }}
              placeholder="Tìm kiếm"
              onChangeText={text => {
                this.setState((textSeach = text));
              }}
            />
          </View>
          <View style={{ flexDirection: "row", marginRight: 10 }}>
            <FeatherIcon name="edit-3" size={30} color="#fff" />
            <FeatherIcon name="bell" size={30} color="#fff" />
          </View>
        </View>

        <View style={{ margin: 10 }}>
          <FeatherIcon name="camera" size={20} color="gray" />
          <View>
            <Text>Khoảnh khắc</Text>
          </View>
        </View>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginLeft: 10 }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQefByIpJpkdg60vI0QloRUDk99s15V97t9VHyXFE11k8Gngsko-jkDWP4Dv-F38E30CPzYfzvAxg&usqp=CAc"
            }}
          />
          <TextInput
            placeholder="Hôm nay bạn thế nào?"
            onChangeText={text => {
              this.setState((textSTT = text));
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            margin: 10,
            borderWith: 1,
            borderColor: "gray",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <FeatherIcon name="image" size={30} color="#63ef17" />
            <Text>Hình ảnh</Text>
          </View>
          <View style={{ width: 1, height: 30, backgroundColor: "gray" }} />
          <View>
            <FeatherIcon name="video" size={20} color="red" />
            <Text>Video</Text>
          </View>
          <View style={{ width: 1, height: 30, backgroundColor: "gray" }} />
          <View>
            <FeatherIcon name="tablet" size={20} color="#000" />
            <Text>Hình nền</Text>
          </View>
        </View>
        <View style={{ marginLeft: 10, flexDirection: "row" }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={{
              uri:
                "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQefByIpJpkdg60vI0QloRUDk99s15V97t9VHyXFE11k8Gngsko-jkDWP4Dv-F38E30CPzYfzvAxg&usqp=CAc"
            }}
          />
          <View style={{ marginHorizontal: 5 }}>
            <Text style={{ fontSize: 20 }}>Hot Baby</Text>
            <Text>Gio dang</Text>
          </View>
        </View>
        <View>
          <Text style={{ marginLeft: 10, fontSize: 20 }}>
            Viet cai gi hay hay vao day
          </Text>
          <View>
            <Image
              style={{ width: widthScreen, height: 200 }}
              source={{
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJrsY-6Pcz025wvhO6h3PbqcESLQNkldaRz_hqGAgHrknZ_vqk7A"
              }}
            />
          </View>
        </View>
        <View
          style={{
            width: widthScreen,
            height: 1,
            backgroundColor: "gray",
            marginLeft: 10,
            marginRight: 10,
            marginTop: 10
          }}
        />
        <View style={{flexDirection:'row',justifyContent:'space-between', margin:10}}>
          <View style={{ flexDirection: "row",alignItems:'center' }}>
          <TouchableOpacity onPress={this.onPressLike}>
            <FeatherIcon name="heart" size={20} color="gray"  style={{color: this.state.isLike ? 'blue': 'gray'}} />
          </TouchableOpacity>
            <Text>{numberLike}</Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <FeatherIcon name="message-circle" size={20} color="gray"/>
            <Text>so luot binh luan</Text>
          </View>
          <FeatherIcon name="more-horizontal" size={20} color="#000"/>
        </View>
      </View>
    );
  }
}
