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
      <Image
        source={{
          uri: "/project/workspace/SafeStep/assets/images/pedestrian_walking_blind.png",
        }}
        style={{
          width: 200,
          height: 200,
          borderRadius: 10,
          resizeMode: "cover",
        }}
      />

      <Text
        style={{
          position: "absolute",
          top: 15,
          left: 5,
          fontSize: 30, // Larger text size
          fontFamily: "Helvetica", // System font
          fontWeight: "bold", // Bold text
          color: "white", // Purple text
          textAlign: "center", // Center the text horizontally
          textTransform: "uppercase", // Uppercase text
          letterSpacing: 4, // Spacing between letters
        }}
      >
        SafeStep
      </Text>
    </View>
  );
}
