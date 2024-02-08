import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  Alert,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import axios from "axios";
import tw from "twrnc";
const snapbnb = require("../assets/snapbnb.png");

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        email,
        password,
      });

      if (response.data.message === "Successfully logged in") {
        const userinfo = response.data.email;
        AsyncStorage.setItem("userinfo", userinfo);
        navigation.navigate("Landing", { userinfo });
      } else {
        Alert.alert("Login Failed", response.data.message);
      }
    } catch (error) {
      console.error("Error making request:", error.message);
      Alert.alert("Error", "An error occurred. Please try again.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={tw`flex-1 bg-[#000000] items-center justify-center`}
    >
      <StatusBar barStyle="light-content" />
      <View style={tw`pb-25`}>
        <Image source={snapbnb} />
      </View>
      <View style={tw`pb-10 items-center `}>
        <Text style={tw`text-white mb-3 text-[18px]`}>Login</Text>

        <View
          style={tw`w-[350px] h-[52px] border-2 border-[#FFFFFF50] rounded-[10px]  justify-center`}
        >
          <TextInput
            placeholder="Email"
            placeholderTextColor="#ffffff40"
            value={email}
            autoCapitalize="none"
            onChangeText={(text) => setEmail(text)}
            style={tw`pl-5 text-white`}
          />
        </View>
        <View style={tw`mt-4`}>
          <View
            style={tw`w-[350px] h-[52px] border-2 border-[#FFFFFF50] rounded-[10px]  justify-center`}
          >
            <TextInput
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholderTextColor="#ffffff40"
              style={tw`pl-5 text-white`}
            />
          </View>
        </View>
        <View style={tw`mt-4`}>
          <View
            style={tw`w-[350px] h-[52px] bg-[#ffffff] rounded-[10px] items-center justify-center`}
          >
            <Button title="Sign In" color="black" onPress={handleSubmit} />
          </View>
        </View>
        {error ? <Text style={tw`text-red-500 mt-2`}>{error}</Text> : null}
      </View>
    </KeyboardAvoidingView>
  );
}
