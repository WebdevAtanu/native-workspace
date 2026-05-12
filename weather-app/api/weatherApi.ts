const apiKey = process.env.EXPO_PUBLIC_API_KEY; // API key from weatherapi.com
export const getWeather = async (city: string) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`; // API endpoint

  try {
    const response = await fetch(url); // Fetch weather data

    if (!response.ok) {
      throw new Error("Failed to fetch weather"); // Throw error if response is not ok
    }

    const data = await response.json(); // Parse response as JSON
    return data; // Return weather data
  } catch (error) {
    console.log(error);
  }
};
