import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Image,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import axios from "axios";
import React, { useState } from "react";
import tw from "twrnc";
const snapbnb = require("../assets/snapbnb.png");
export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/auth/signup", { email, password })
      .then(() => {
        navigation.navigate("Login");
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
      <View style={tw`pb-25`}>
        <Image source={snapbnb} />
      </View>
      <View style={tw`pb-20 items-center `}>
        <Text style={tw`text-white mb-3 text-[18px]`}>Sign up</Text>

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
            <Button title="Sign Up" color="black" onPress={handleSubmit} />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
