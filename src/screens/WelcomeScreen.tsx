import { Link } from "expo-router";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { WelcomeScreenProps } from "@/navigation/types";
import '../global.css'
import HeaderComp from "@/components/Header";


export default function Page({ navigation }: WelcomeScreenProps) {
  const handlePress = () => {
    navigation.navigate("Login");
  }
  return (
    <View className="flex flex-1">
      <HeaderComp />
      <View className="flex-1">
        <View className="py-12 md:py-24 lg:py-32 xl:py-48">
          <View className="px-4 md:px-6">
            <View className="flex flex-col items-center gap-4 text-center">
              <Text
                role="heading"
                className="text-3xl text-center native:text-5xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Welcome to Project Shreeteva
              </Text>
              <Text className="mx-auto max-w-[700px] text-lg text-center text-gray-500 md:text-xl dark:text-gray-400">
                Discover and collaborate on shreeteva. Explore our services now.
              </Text>
              <TouchableOpacity
                onPress={handlePress}
                className="bg-blue-500 px-6 py-3 rounded-lg"
              >
                <Text className="text-white font-semibold">Go to Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <Footer />
    </View>
  );
}

function Footer() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View
      className="flex shrink-0 bg-gray-100 native:hidden"
      style={{ paddingBottom: bottom }}
    >
      <View className="py-6 flex-1 items-start px-4 md:px-6 ">
        <Text className={"text-center text-gray-700"}>
          © {new Date().getFullYear()} Me
        </Text>
      </View>
    </View>
  );
}
