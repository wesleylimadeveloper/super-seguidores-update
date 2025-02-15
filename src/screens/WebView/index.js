import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { WebView as WebViewContainer } from "react-native-webview";
import { styles } from "./styles";

export function WebView() {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color="#03B72F" size="large" />
        </View>
      )}

      <WebViewContainer
        onLoadEnd={() => setLoading(false)}
        style={styles.container}
        source={{ uri: "https://superseguidores.com/" }}
      />
    </View>
  );
}
