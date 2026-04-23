import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            headerShown: true,
            tabBarActiveBackgroundColor: 'black',
            tabBarInactiveBackgroundColor: 'white'
        }}>
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: ({ color, size }) => {
                    return (
                        <MaterialIcons name="home" size={size} color={color} />
                    )
                }
            }} />
            <Tabs.Screen name="profile" options={{
                title: "Profile",
                tabBarIcon: ({ color, size }) => {
                    return (
                        <MaterialIcons name="person" size={size} color={color} />
                    )
                }
            }} />
            <Tabs.Screen name="settings" options={{
                title: "Settings",
                tabBarIcon: ({ color, size }) => {
                    return (
                        <MaterialIcons name="settings" size={size} color={color} />
                    )
                }
            }} />
        </Tabs>
    );
}