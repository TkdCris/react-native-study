import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    button: {
        marginTop: 74,
        marginRight: 32,
        alignSelf: "flex-end"
    },
    bgImg: {
        ...StyleSheet.absoluteFillObject,
        left: -350
    },
    gradiente: {
        ...StyleSheet.absoluteFillObject,
    },
    blur: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    }
})