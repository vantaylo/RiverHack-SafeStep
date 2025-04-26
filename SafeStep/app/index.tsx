import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3733ff",
      }}
    >
      <Text
        style={{
          fontSize: 30, // Larger text size
          fontFamily: "Helvetica", // System font
          fontWeight: "bold", // Bold text
          color: "white", // Purple text
          textAlign: "center", // Center the text horizontally
          textTransform: "uppercase", // Uppercase text
          letterSpacing: 4, // Spacing between letters
          marginTop: -255,
        }}
      >
        SafeStep
      </Text>
    </View>
  );
}
