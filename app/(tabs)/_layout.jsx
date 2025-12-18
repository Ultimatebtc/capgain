import { Tabs } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Layout () {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: "blue"}}>
            <Tabs.Screen
            name="home"
            options={{
                title: "Home",
                headerShown: false,
                tabBarIcon: ({ color }) => (<Entypo name="home" size={24} color={color} />)
            }}
            />
            <Tabs.Screen
            name="calculate"
            options={{
                title: "Calculate",
                headerShown: false,
                tabBarIcon: ({ color }) => (<FontAwesome6 name="calculator" size={24} color={color} />)
            }}
            />
            <Tabs.Screen
            name="history"
            options={{
                title: "History",
                headerShown: false,
                tabBarIcon: ({ color }) => (<FontAwesome5 name="history" size={24} color={color} />)
            }}
            />
            <Tabs.Screen
            name="profile"
            options={{
                title: "Profile",
                headerShown: false,
                tabBarIcon: ({ color }) => (<FontAwesome name="user-circle" size={24} color={color} />)
            }}
            />
        </Tabs>
    )
}