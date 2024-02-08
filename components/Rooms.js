import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  View,
  FlatList,
  StatusBar,
  ScrollView,
} from "react-native";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import tw from "twrnc";

export default function Rooms({ navigation }) {
  const route = useRoute();
  const { id } = route.params;
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/bnb/roomsbyId" + id
        );
        setRooms(response.data.rooms);
      } catch (error) {
        console.error("Error making request:", error.message);
      }
    };

    fetchRooms();
  }, []);

  return (
    <View style={tw`bg-[#040404] items-center  justify-center h-full`}>
      <React.Fragment>
        <Text style={tw`text-white pt-20 text-[24px]`}>My Apartment</Text>
        <StatusBar barStyle="light-content" />
        <FlatList
          data={rooms}
          renderItem={({ item }) => (
            <View style={tw`pb-5`} key={item._id}>
              <View style={tw`items-center justify-center`}>
                <Image
                  source={{ uri: item.image }}
                  style={tw`w-[350px] h-[296.93px] rounded-xl`}
                />
              </View>
              <Text style={tw`text-white pl-5 pb-2`}>{item.name}</Text>
              <Text style={tw`text-white px-5`}>{item.description}</Text>
              <View style={tw`flex flex-row items-center px-5 justify-between`}>
                <Text style={tw`text-white`}>
                  {item.rooms} bedroom apartment
                </Text>
                <View
                  style={tw`w-[64px] bg-[#ffffff] items-center justify-center h-[30px] rounded-2xl`}
                >
                  <Text>{item.price}$</Text>
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item) => String(item._id)}
        />
      </React.Fragment>
    </View>
  );
}
