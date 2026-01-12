import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={require("@/assets/images/background-image.png")}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.container}>
            {/* Company Logo */}
            <View style={styles.companyLogo}>
              <Image source={require("@/assets/images/Logo.png")} />
            </View>

            {/* Text Group */}
            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>Find your favorite place here</Text>
              <Text style={styles.textSmall}>
                The best prices for over 2
              </Text>
              <Text style={styles.textSmall}>
                million properties worldwide
              </Text>
            </View>

            {/* Buttons & Navigation */}
            <View style={{ position: "absolute", bottom: 0, width: "100%" }}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}>
