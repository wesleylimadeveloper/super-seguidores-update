import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { WebView } from "./src/screens/WebView";

export default function App() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#03B72F");
  }, []);

  return (
    <>
      <StatusBar backgroundColor="#03B72F" barStyle="light-content" />
      <WebView />
    </>
  );
}
