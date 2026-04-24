import AddTask from "@/components/add-task";
import { CustomText } from "@/components/custom-text";
import TaskCard from "@/components/task-card";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Task from "../../types/task";

// const SCREEN_HEIGHT = Dimensions.get("window").height;

export default function Home() {
  const insets = useSafeAreaInsets();
  const [show, setShow] = useState(false);

  const [tasks, setTask] = useState<Task[]>([
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
      completed: false,
      date: "2023-01-01",
    },
  ]);

  // Animations
  const translateY = useRef(new Animated.Value(100)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    if (show) {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 100,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0.9,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [show, opacity, translateY, scale]);

  const toggleComplete = (id: number) => {
    setTask((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  //   useEffect(() => {
  //   const fetchTasks = async () => {
  //     const storedTasks = await loadTasks();
  //     if (storedTasks.length) {
  //       setTask(storedTasks);
  //     }
  //   };

  //   fetchTasks();
  // }, []);

  return (
    <View
      style={{
        ...styles.mainContainer,
        marginTop: insets.top,
        marginBottom: insets.bottom,
      }}
    >
      {/* Task List */}
      <FlatList
        contentContainerStyle={{ padding: 12 }}
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskCard task={item} onToggle={toggleComplete} />
        )}
      />

      {/* Floating Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setShow(true)}
      >
        <CustomText style={{ fontSize: 22, color: "#fff" }}>＋</CustomText>
      </TouchableOpacity>

      {/* Modal */}
      {show && (
        <View style={StyleSheet.absoluteFill}>
          {/* Backdrop */}
          <TouchableOpacity
            activeOpacity={1}
            style={styles.backdrop}
            onPress={() => setShow(false)}
          >
            <Animated.View
              style={[styles.backdropOverlay, { opacity }]}
            />
          </TouchableOpacity>

          {/* Pop Card */}
          <Animated.View
            style={[
              styles.modalCard,
              {
                transform: [{ translateY }, { scale }],
                opacity,
              },
            ]}
          >
            {/* Close */}
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setShow(false)}
            >
              <CustomText style={{ fontSize: 20 }}>✕</CustomText>
            </TouchableOpacity>

            <AddTask setTask={setTask} />
          </Animated.View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  floatingButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 20,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },

  // BACKDROP
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },

  backdropOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  // MODAL CARD
  modalCard: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",

    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },

  closeBtn: {
    position: "absolute",
    right: 16,
    top: 10,
    zIndex: 10,
  },
});