import { View, Text, StyleSheet } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function Home () {
    const [loaded,error] = useFonts({
        "atlantico": require("../../assets/fonts/AtlanticoFont-Demo.otf")
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    },[loaded,error])

    if (!loaded && !error) {
        return null;
    }
    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View>
                    <Text style={styles.brandText}>CapGain</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    brandText: {
        fontFamily: "atlantico",
        fontSize: 45,
        color: "black",
        fontWeight: "semibold"
        
    }
})