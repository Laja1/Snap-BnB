import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  Button,
  Platform,
  SafeAreaView,
} from "react-native";

const eli = require("../assets/eli.png");

import React, { useState } from "react";
import tw from "twrnc";

export default function Inbox({ navigation }) {
  return (
    <SafeAreaView style={tw`h-full bg-[#040404] `}>
      <StatusBar barStyle="light-content" />
      <View style={tw`p-5 `}>
        <Text style={tw`text-white text-[24px] pb-5`}>Inbox</Text>
        <Text style={tw`text-white text-[18px] pb-2`}>No New Messages</Text>
        <Text style={tw`text-[#ffffff80] text-[15px] pb-5`}>
          When you contact a host or send a reservation request, you’ll see your
          messages here.
        </Text>
      </View>
    </SafeAreaView>
  );
}
