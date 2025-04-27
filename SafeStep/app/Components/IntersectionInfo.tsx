import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import mockData from "../MockData/mock.json";

export default function IntersectionInfo() {
  interface SignalGroup {
    signalGroupId: number;
    direction: string;
    signalPhase: string;
    timeRemaining: number;
  }

  interface TrafficLightData {
    timestamp: number;
    intersectionId: number;
    intersectionName: string;
    signalGroups: SignalGroup[];
  }

  const [currentTLData, setCurrentTLDData] = useState<TrafficLightData[] | null>(null);
  const [intersection, setIntersection] = useState('Street Name 1 / Street Name 2');
  const [status, setStatus] = useState('STOP');

  const fetchData = () => {
    // With realtime data, you would fetch data from the Traffic Light API
    // For this example, we'll just use the mock data
    setCurrentTLDData(mockData);
  };

  useEffect(() => {
    fetchData();
    if (currentTLData) {
      const { intersectionName, signalGroups } = currentTLData[0];
      setIntersection(intersectionName);
      setStatus(status);
    }
  }, [currentTLData]);

  return (
    <View>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "Helvetica",
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: 4,
        }}
      >
        {intersection}
      </Text>
      <Text
        style={{
          fontSize: 75,
          fontFamily: "Helvetica",
          fontWeight: "bold",
          color: "red",
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: 4,
        }}
      >
        {status}
      </Text>
    </View>
  );
}