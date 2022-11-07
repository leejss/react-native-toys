import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import Navigation from "./navigations";

const styles = StyleSheet.create({
  bar: {
    backgroundColor: "white",
  },
});

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="black" />
      <Navigation />
    </>
  );
}
