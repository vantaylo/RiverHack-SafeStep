
import { View, Text } from 'react-native';
import SafeStep from './Components/SafeStep';

export default function HomeScreen() {
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
      <SafeStep/>
    </View>
  )
}
