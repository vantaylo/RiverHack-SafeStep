import { Button, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function CrossButton({ onPress }: { onPress: () => void; }) {
  const [crossBtn, setCrossBtn] = useState(true);

  return (
    <TouchableOpacity
      style={{ backgroundColor: '#000000', borderRadius: 5, padding: 10 }}
      onPress={onPress}
      accessibilityLabel="PUSH TO CROSS"
    >
      <Button
        color="#FFFFFF"
        onPress={onPress}
        title="PUSH TO CROSS"
      />
    </TouchableOpacity>
  );
}
