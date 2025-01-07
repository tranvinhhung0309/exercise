import { HelloWave } from "@/components/HelloWave";
import { Image, StyleSheet, Platform, View, SafeAreaView } from 'react-native';
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router"; // Nếu dùng Expo Router

const ProfileLayout =()=> {
    const [timer, setTimer] = useState(10);
    const router = useRouter(); // Sử dụng điều hướng

    useEffect(() => {
        // Đếm ngược 10 giây
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        // Chuyển trang sau 10 giây
        const timeout = setTimeout(() => {
            router.replace("../(homepage)"); // Điều hướng đến HomePage
        }, 10000);

        // Xóa bộ đếm khi component unmount
        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <SafeAreaView style={styles.titleContainer}>
            <ThemedText type="title">Welcome!</ThemedText>
            <ThemedText type="default">Họ và tên: Trần Vĩnh Hùng</ThemedText>
            <ThemedText type="default">MSSV: 21110198</ThemedText>
            <ThemedText type="default">Môn học: Lập trình di động nâng cao</ThemedText>
            <ThemedText type="default">Chuyển đến HomePage sau {timer} giây...</ThemedText>
            <HelloWave />
        </SafeAreaView>
    );
}

export default ProfileLayout

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
