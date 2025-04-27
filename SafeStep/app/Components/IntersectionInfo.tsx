import { Text, View } from "react-native";
import { useState } from "react";

export default function IntersectionInfo() {
  const [intersection, setIntersection] = useState('Street Name 1 / Street Name 2');
  const [status, setStatus] = useState('STOP');

  return (
    <View>
      <Text
        style={{
          fontSize: 30, // Larger text size
          fontFamily: "Helvetica", // System font
          fontWeight: "bold", // Bold text
          color: "black", // Purple text
          textAlign: "center", // Center the text horizontally
          textTransform: "uppercase", // Uppercase text
          letterSpacing: 4, // Spacing between letters
        }}
      >
        {intersection}
      </Text>
      <Text
        style={{
          fontSize: 75, // Larger text size
          fontFamily: "Helvetica", // System font
          fontWeight: "bold", // Bold text
          color: "red", // Purple text
          textAlign: "center", // Center the text horizontally
          textTransform: "uppercase", // Uppercase text
          letterSpacing: 4, // Spacing between letters
        }}
      >
        {status}
      </Text>
    </View>
  );
}