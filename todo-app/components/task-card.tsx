import Task from "@/types/task";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Props
type TaskCardProps = {
  task: Task;
  onToggle: (id: number) => void;
};

export default function TaskCard({ task, onToggle }: TaskCardProps) {
  return (
    <View style={styles.card}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title} numberOfLines={1}>
          {task.title}
        </Text>
        <Text style={styles.date}>
          {new Date(task.date).toLocaleDateString()}
        </Text>
      </View>

      {/* Description */}
      <Text style={styles.description} numberOfLines={2}>
        {task.description}
      </Text>

      {/* Footer */}
      <View style={styles.footer}>
        <View
          style={[
            styles.statusBadge,
            task.completed ? styles.doneBadge : styles.pendingBadge,
          ]}
        >
          <Text
            style={[
              styles.statusText,
              task.completed ? styles.doneText : styles.pendingText,
            ]}
          >
            {task.completed ? "Completed" : "Pending"}
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={[
            styles.button,
            task.completed ? styles.doneButton : styles.pendingButton,
          ]}
          onPress={() => onToggle(task.id)}
        >
          <Text style={styles.buttonText}>
            {task.completed ? "Undo" : "Done"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 16,
    marginBottom: 14,

    // Shadow (iOS + Android)
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 17,
    fontWeight: "600",
    color: "#111",
    flex: 1,
    marginRight: 8,
  },

  date: {
    fontSize: 12,
    color: "#999",
  },

  description: {
    marginTop: 8,
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },

  footer: {
    marginTop: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // Status badge
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },

  doneBadge: {
    backgroundColor: "#E6F7EE",
  },

  pendingBadge: {
    backgroundColor: "#FFF4E5",
  },

  statusText: {
    fontSize: 12,
    fontWeight: "600",
  },

  doneText: {
    color: "#1AAE6F",
  },

  pendingText: {
    color: "#E67E22",
  },

  // Button
  button: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
  },

  doneButton: {
    backgroundColor: "#1AAE6F",
  },

  pendingButton: {
    backgroundColor: "#FF9F43",
  },

  buttonText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
  },
});