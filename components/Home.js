import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
const background = require("../assets/background.png");
const backgorund = require("../assets/backgorund.png");
const snapbnb = require("../assets/snapbnb.png");
const Up = require("../assets/Up.png");
import tw from "twrnc";
export default function Home({ navigation }) {
  return (
    <SafeAreaView style={tw``}>
      <View style={tw`mt-[-60px] `}>
        <ImageBackground
          style={tw`w-full h-[864px] items-center `}
          source={background}
        >
          <Image source={Up} style={tw`mt-30 `} />

          <Image source={snapbnb} style={tw`mt-10`} />

          <Text style={tw`text-white mr-10`}>
            make finding a home on the go easier
          </Text>
          <View style={tw`mt-[408px]`}>
            <TouchableOpacity onPress={() => navigation.navigate("Reglog")}>
              <View
                style={tw`w-[350px] h-[52px] bg-[#ffffff] rounded-[10px] items-center justify-center`}
              >
                <Text style={tw`text-[16px]`}>Explore The World</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}
