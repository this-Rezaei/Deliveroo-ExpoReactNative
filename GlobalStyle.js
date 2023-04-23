import { Platform, StyleSheet, StatusBar } from "react-native";
export default StyleSheet.create({
  droidSafeArea: {
    // direction: "rtl",
    textAlign: "right",
    writingDirection: "rtl",
    // flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
