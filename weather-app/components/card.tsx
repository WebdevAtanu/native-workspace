import React from "react";
import { Image, Text, View } from "react-native";

const Card = ({ weather }) => {
  if (!weather) return null;

  const { location, current } = weather;

  return (
    <View className="bg-slate-900 mx-5 mt-10 rounded-3xl p-6 shadow-2xl border border-slate-800">
      
      {/* Location */}
      <View className="items-center mb-8">
        <Text className="text-white text-3xl font-bold">
          {location.name}
        </Text>

        <Text className="text-slate-400 text-base mt-1">
          {location.country}
        </Text>
      </View>

      {/* Weather Info */}
      <View className="items-center">
        <Image
          source={{
            uri: `https:${current.condition.icon}`,
          }}
          className="w-32 h-32"
        />

        <Text className="text-white text-6xl font-extrabold mt-2">
          {current.temp_c}°
        </Text>

        <Text className="text-sky-400 text-xl font-semibold mt-2">
          {current.condition.text}
        </Text>
      </View>

      {/* Extra Details */}
      <View className="flex-row justify-between mt-10">
        
        <View className="bg-slate-800 flex-1 mx-1 rounded-2xl p-4 items-center">
          <Text className="text-slate-400 text-sm">
            Humidity
          </Text>

          <Text className="text-white text-lg font-bold mt-1">
            {current.humidity}%
          </Text>
        </View>

        <View className="bg-slate-800 flex-1 mx-1 rounded-2xl p-4 items-center">
          <Text className="text-slate-400 text-sm">
            Wind
          </Text>

          <Text className="text-white text-lg font-bold mt-1">
            {current.wind_kph} km/h
          </Text>
        </View>

        <View className="bg-slate-800 flex-1 mx-1 rounded-2xl p-4 items-center">
          <Text className="text-slate-400 text-sm">
            Feels Like
          </Text>

          <Text className="text-white text-lg font-bold mt-1">
            {current.feelslike_c}°C
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Card;