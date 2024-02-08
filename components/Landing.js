import { StyleSheet, Text, StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "./Explore";
import Let from "./Let";
import Rooms from "./Rooms";
import User from "./User";
import Inbox from "./Inbox";
import tw from "twrnc";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Iconn from "react-native-vector-icons/EvilIcons";

export const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabStyle: {
          backgroundColor: "#000000",
        },
      }}
    >
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          headerShown: false,
          tabBarActiveBackgroundColor: "black",
          tabBarInactiveBackgroundColor: "black",
          tabBarIcon: () => <Icon name="magnify" size={30} color="white" />,
        }}
      />
      <Tab.Screen
        name="Upload"
        component={Let}
        options={{
          headerShown: false,
          tabBarActiveBackgroundColor: "black",
          tabBarInactiveBackgroundColor: "black",
          tabBarIcon: () => (
            <Feather name="upload-cloud" size={25} color="white" />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Rooms"
        component={Rooms}
        options={{
          headerShown: false,
          tabBarActiveBackgroundColor: "black",
          tabBarInactiveBackgroundColor: "black",
          tabBarIcon: () => (
            <Ionicons
              name="file-tray-stacked-outline"
              size={25}
              color="white"
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          headerShown: false,
          tabBarActiveBackgroundColor: "black",
          tabBarInactiveBackgroundColor: "black",
          tabBarIcon: () => (
            <Ionicons name="chatbubbles-outline" size={25} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          headerShown: false,
          tabBarActiveBackgroundColor: "black",
          tabBarInactiveBackgroundColor: "black",
          tabBarIcon: () => <Iconn name="user" size={30} color="white" />,
        }}
      />
    </Tab.Navigator>
  );
};
export default function Landing() {
  return (
    <Stack.Navigator style={tw`bg-[#000000]`}>
      <Stack.Screen
        name="BottomNav"
        component={BottomNav}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
