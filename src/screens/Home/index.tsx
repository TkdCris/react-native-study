import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

import { View, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";
import { Sheet } from "../../components/Sheet";

export function Home() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSheet() {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/cris_perfil.jpg")}
        resizeMode="cover"
        style={styles.bgImg}
      >
        {isOpen && (
          <Animated.View
            entering={FadeIn}
            exiting={FadeOut}
            style={styles.blur}
          >
            <BlurView style={styles.blur} intensity={0} tint="dark" />
          </Animated.View>
        )}
        <LinearGradient
          colors={[
            "rgba(0, 0, 0, 0.4)",
            "rgba(0, 0, 0, 0)",
            "rgba(0, 0, 0, 1)",
          ]}
          locations={[0, 0.7, 1]}
          style={styles.gradiente}
        />
      </ImageBackground>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={toggleSheet}
      >
        <Ionicons name="options" size={24} color="#fff" />
      </TouchableOpacity>

      {isOpen && <Sheet onClose={toggleSheet} />}
    </View>
  );
}
