import { HelloWave } from "@/components/hello-wave";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Home() {
      const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: insets.top,
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <HelloWave/>
    </View>
  );
}
