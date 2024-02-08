import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import tw from "twrnc";
const snapbnb = require("../assets/snapbnb.png");
export default function Reglog({ navigation }) {
  return (
    <View style={tw`bg-[#000000] items-center h-full`}>
      <View style={tw`pt-50`}>
        <Image source={snapbnb} />
      </View>
      <Text style={tw`text-white pt-40 mb-3 text-[18px]`}>
        Login or Sign up
      </Text>
      <View style={tw``}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <View
            style={tw`w-[350px] h-[52px] bg-[#ffffff] rounded-[10px] items-center justify-center`}
          >
            <Text style={tw`text-[16px]`}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={tw`mt-4`}>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <View
            style={tw`w-[350px] h-[52px] bg-[#ffffff] rounded-[10px] items-center justify-center`}
          >
            <Text style={tw`text-[16px]`}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
