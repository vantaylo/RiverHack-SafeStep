import { Text, View, Image } from "react-native";

export default function SafeStep() {
  return (
    <View>
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
          fontSize: 50, // Larger text size
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