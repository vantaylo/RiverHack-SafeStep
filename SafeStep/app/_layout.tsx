
import { View } from 'react-native';
import CrossButton from './Components/CrossButton';
import IntersectionInfo from './Components/IntersectionInfo';

export default function HomeScreen() {
  return (
    <View 
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      backgroundColor: "#f7B500",
    }}
    >
      <IntersectionInfo/>
      <CrossButton 
        onPress={() => console.log('CrossButton pressed')}
      />
    </View>
  )
}
