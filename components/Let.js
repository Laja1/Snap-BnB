import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import tw from "twrnc";
const snapbnb = require("../assets/snapbnb.png");

export default function Let({ navigation }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rooms, setRooms] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    AsyncStorage.getItem("id")
      .then((id) => {
        if (id !== null) {
          console.log("Retrieved id:", id);
          setUserId(id);
        } else {
          console.log("User id not found in AsyncStorage.");
        }
      })
      .catch((error) => console.error("Error retrieving id:", error));
  }, []);
  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/bnb/create", {
        name,
        description,
        rooms,
        price,
        location,
        image,
        userId, // Include userId in the post request
      })
      .then((result) => {
        navigation.navigate("Explore");
      })
      .catch((error) => {
        console.error("Error making request:", error.message);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={tw`flex-1 bg-[#000000] items-center justify-center`}
    >
      <StatusBar barStyle="light-content" />
      <View style={tw`pt-20 pb-10`}>
        <Image source={snapbnb} />
      </View>
      <View
        style={tw`bg-[#2C2C2C] w-[350px] h-[500px] gap-10 items-center justify-center rounded-[40px]`}
      >
        <View
          style={tw`w-[300px] h-[52px] border-2 border-[#ffffff80] rounded-[10px]  justify-center`}
        >
          <TextInput
            placeholder="Name"
            placeholderTextColor="#ffffff40"
            value={name}
            onChangeText={(text) => setName(text)}
            style={tw`pl-5 text-white`}
          />
        </View>

        <View
          style={tw`w-[300px] h-[52px] border-2 border-[#ffffff80] rounded-[10px]  justify-center`}
        >
          <TextInput
            placeholder="Description"
            placeholderTextColor="#ffffff40"
            value={description}
            onChangeText={(text) => setDescription(text)}
            style={tw`pl-5 text-white`}
          />
        </View>

        <View
          style={tw`w-[300px] h-[52px] border-2 border-[#ffffff80]  rounded-[10px]  justify-center`}
        >
          <TextInput
            placeholder="Location"
            placeholderTextColor="#ffffff40"
            value={location}
            onChangeText={(text) => setLocation(text)}
            style={tw`pl-5 text-white`}
          />
        </View>
        <View style={tw`flex flex-row gap-7`}>
          <View
            style={tw`w-[170px] h-[52px] border-2 border-[#ffffff80] rounded-[10px]  justify-center`}
          >
            <TextInput
              placeholder="How Many Rooms?"
              placeholderTextColor="#ffffff40"
              value={rooms}
              onChangeText={(text) => setRooms(text)}
              style={tw`pl-5 text-white`}
            />
          </View>
          <View
            style={tw`w-[100px] h-[52px] border-2 border-[#ffffff80] rounded-[10px]  justify-center`}
          >
            <TextInput
              placeholder="Price"
              placeholderTextColor="#ffffff40"
              value={price}
              onChangeText={(text) => setPrice(text)}
              style={tw`pl-5 text-white`}
            />
          </View>
        </View>
        <View
          style={tw`w-[300px] h-[52px] border-2 border-[#ffffff80] rounded-[10px]  justify-center`}
        >
          <TextInput
            placeholder="Image URL"
            placeholderTextColor="#ffffff40"
            value={image}
            onChangeText={(text) => setImage(text)}
            style={tw`pl-5 text-white`}
          />
        </View>
      </View>
      <View style={tw`mt-5`}>
        <TouchableOpacity onPress={handleSubmit}>
          <MaterialIcons name="add-circle-outline" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
