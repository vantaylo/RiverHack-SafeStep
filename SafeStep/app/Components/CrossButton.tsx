import { TouchableOpacity, Text } from "react-native";
import { useState } from "react";

export default function CrossButton({ onPress }: { onPress: () => void; }) {
  const [crossBtn, setCrossBtn] = useState(true);

  return (
      <TouchableOpacity
        accessibilityLabel="PUSH TO CROSS"
        style={{
          backgroundColor: "#000000",
          padding: 10,
          borderRadius: 5,
          alignItems: "center",
        }}
        onPress={onPress}
      >
        <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>PUSH TO CROSS</Text>
      </TouchableOpacity>
  );
}
