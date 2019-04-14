import React, { Component } from "react";
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,createStackNavigator
} from "react-navigation";
import NhatKy from "../screen/nhatky/nhatky";
import News from "../screen/News/news";
import nhom from "../screen/nhom/nhom";
import them from "../screen/them/them";
import danhba from "../screen/danhba/danhba";


import tinnhan from "../screen/tinnhan/tinnhan";
import FeatherIcon from 'react-native-vector-icons/Feather'
const BottomTab = createBottomTabNavigator(
  {
    tinnhan: {
      screen: tinnhan,
      navigationOptions: ( navigation ) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <FeatherIcon
            name="message-circle"
            color={focused ? "red" : "gray"}
            size={25}
          />
        )
      })
    },
    danhba: {
      screen: danhba,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <FeatherIcon name="list" color={focused ? "red" : "gray"} size={25} />
        )
      })
    },
    nhom: {
      screen: nhom,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <FeatherIcon
            name="users"
            color={focused ? "red" : "gray"}
            size={25}
          />
        )
      })
    },
    nhatky: {
      screen: NhatKy,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <FeatherIcon
            name="clock"
            color={focused ? "red" : "gray"}
            size={25}
          />
        )
      })
    },
    them: {
      screen: them,
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <FeatherIcon name="more-horizontal" color={focused ? "red" : "gray"} size={25} />
        )
      })
    }
  },
  {
    tabBarOptions: {
      //activeTintColor: 'red',
      showLabel: false
    }
  }
);

const MainStack = createStackNavigator(
  {
    BottomTab,

  },
  {
    headerMode: "none"
  }
);
export default createAppContainer(MainStack);