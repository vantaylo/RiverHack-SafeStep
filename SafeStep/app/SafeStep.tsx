import { Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
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
        }}
      >
        CURRENT INTERSECTION
      </Text>
      <Text
        style={{
          fontSize: 100, // Larger text size
          fontFamily: "Helvetica", // System font
          fontWeight: "bold", // Bold text
          color: "white", // Purple text
          textAlign: "center", // Center the text horizontally
          textTransform: "uppercase", // Uppercase text
          letterSpacing: 4, // Spacing between letters
        }}
      >
        CROSSING STATUS
      </Text>
    </View>
  );
}