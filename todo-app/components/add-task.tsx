import { AddTaskType } from "@/types/task";
import React, { useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

// Props type
type AddTaskProps = {
  setTask: React.Dispatch<React.SetStateAction<any[]>>;
};

export default function AddTask({ setTask }: AddTaskProps) {
  const [taskData, setTaskData] = useState<AddTaskType>({
    title: "",
    description: "",
    completed: false,
  });

  const addNewTask = () => {
    if (!taskData.title.trim()) return;

    setTask((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        title: taskData.title,
        description: taskData.description,
        completed: false,
        date: new Date().toISOString(),
      },
    ]);

    Alert.alert("Task added successfully!");

    setTaskData({
      title: "",
      description: "",
      completed: false,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Create Task</Text>

      {/* Title Input */}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          placeholder="Enter task title"
          placeholderTextColor="#999"
          value={taskData.title}
          onChangeText={(text) =>
            setTaskData((prev) => ({ ...prev, title: text }))
          }
          style={styles.input}
        />
      </View>

      {/* Description Input */}
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          placeholder="Write something about the task..."
          placeholderTextColor="#999"
          value={taskData.description}
          onChangeText={(text) =>
            setTaskData((prev) => ({ ...prev, description: text }))
          }
          style={styles.textArea}
          multiline
        />
      </View>

      {/* Button */}
      <TouchableOpacity
        activeOpacity={0.85}
        style={[
          styles.button,
          !taskData.title.trim() && styles.buttonDisabled,
        ]}
        onPress={addNewTask}
        disabled={!taskData.title.trim()}
      >
        <Text style={styles.buttonText}>+ Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 16,
    backgroundColor: "#ffffff",
    borderRadius: 16,

    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },

  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
    color: "#111",
  },

  inputWrapper: {
    marginBottom: 14,
  },

  label: {
    fontSize: 13,
    marginBottom: 6,
    color: "#666",
    fontWeight: "500",
  },

  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    fontSize: 14,
    backgroundColor: "#F9FAFB",
    color: "#111",
  },

  textArea: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 10,
    padding: 12,
    height: 110,
    textAlignVertical: "top",
    fontSize: 14,
    backgroundColor: "#F9FAFB",
    color: "#111",
  },

  button: {
    marginTop: 10,
    backgroundColor: "#111",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonDisabled: {
    backgroundColor: "#ccc",
  },

  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});