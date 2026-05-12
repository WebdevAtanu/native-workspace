import Card from "@/components/card";
import useWeather from "@/hooks/useWeather";
import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [inputCity, setInputCity] = useState("");
  const [city, setCity] = useState("");

  const weather = useWeather(city);

  return (
    <View className="flex-1 bg-slate-900 p-4">
      {/* Search Box */}
      <View className="flex-row gap-2 mb-5">
        <TextInput
          placeholder="Enter city"
          placeholderTextColor="#94a3b8"
          value={inputCity}
          onChangeText={setInputCity}
          className="flex-1 border border-slate-600 rounded-xl px-4 py-3 text-white"
        />

        <TouchableOpacity
          className="bg-blue-500 px-5 rounded-xl items-center justify-center"
          onPress={() => setCity(inputCity)}
        >
          <Text className="text-white font-bold">
            Search
          </Text>
        </TouchableOpacity>
      </View>

      {/* Weather Card */}
      <Card weather={weather} />
    </View>
  );
}