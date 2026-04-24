import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveTasks = async (tasks: any[]) => {
  try {
    await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
  } catch (e) {
    console.log("Error saving tasks", e);
  }
};

export const loadTasks = async () => {
  try {
    const data = await AsyncStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.log("Error loading tasks", e);
    return [];
  }
};
