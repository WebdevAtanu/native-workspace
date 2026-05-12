import { useEffect, useState } from "react";
import { getWeather } from "../api/weatherApi";

export default function useWeather(city: string) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await getWeather(city); // call the getWeather function
      setWeather(response);
    }

    fetchData();
  }, [city]);

  return weather;
}
