import { Text, View } from "react-native";
import {location} from "./map";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.{location}</Text>
      
    </View>
  );
}
