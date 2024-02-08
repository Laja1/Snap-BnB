import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import axios from "axios";

import React, { useState, useEffect } from "react";
import tw from "twrnc";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Explore({ navigation }) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get("http://localhost:3001/bnb/rooms");
        setRooms(response.data.rooms);
      } catch (error) {
        console.error("Error making request:", error.message);
      }
    };

    fetchRooms();

    // Retrieve userinfo from AsyncStorage
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={tw`flex-1 bg-[#000000] items-center justify-center`}
    >
      <StatusBar barStyle="light-content" />
      <View>
        <View style={tw` items-center`}>
          <View style={tw`pt-15 pb-5 justify-center`}>
            <View
              style={tw`w-[300px] h-[52px] flex-row border-2 border-[#ffffff] bg-[#ffffff] rounded-[20px] items-center pl-5`}
            >
              <Icon name="magnify" size={30} color="black" />
              <TextInput
                placeholder="What are you looking for?"
                placeholderTextColor="#000000"
                style={tw`pl-5 text-black`}
              />
            </View>
          </View>

          <FlatList
            data={rooms}
            renderItem={({ item }) => (
              <View style={tw`pb-5 pt-5`} key={item._id}>
                <View style={tw`items-center justify-center`}>
                  <Image
                    source={{ uri: item.image }}
                    style={tw`w-[350px] h-[296.93px] rounded-xl`}
                  />
                </View>
                <View style={tw`items-center pt-2 items-center justify-center`}>
                  <View
                    style={tw`w-[200px] bg-[#ffffff] items-center justify-center h-[30px] rounded-lg`}
                  >
                    <Text style={tw`text-black  font-bold`}>{item.name}</Text>
                  </View>
                </View>
                <View style={tw`items-center pt-2 items-center justify-center`}>
                  <View
                    style={tw`w-[360px] bg-[#ffffff90] items-center justify-center h-[40px] rounded-lg`}
                  >
                    <Text style={tw`text-black `}>{item.description}</Text>
                  </View>
                </View>
                <View
                  style={tw`flex flex-row items-center px-5 pt-2 justify-between`}
                >
                  <Text style={tw`text-white`}>
                    {item.rooms} bedroom apartment
                  </Text>
                  <View
                    style={tw`w-[60px] bg-[#ffffff] items-center justify-center h-[30px] rounded-2xl`}
                  >
                    <Text>{item.price}$</Text>
                  </View>
                </View>
              </View>
            )}
            keyExtractor={(item) => String(item._id)}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
