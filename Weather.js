import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import PropTypes from "prop-types";

const weatherOptions = {
	Thunderstorm: {
		iconName: "weather-lightning",
		gradient: ["#373B44", "#4286f4"],
		title: "Thunderstorm in the house",
		subtitle: "Actually, outside of the house",
	},
	Drizzle: {
		iconName: "weather-hail",
		gradient: ["#89F7FE", "#66A6FF"],
		title: "Drizzle",
		subtitle: "Is like rain, but gay 🏳️‍🌈",
	},
	Rain: {
		iconName: "weather-rainy",
		gradient: ["#00C6FB", "#005BEA"],
		title: "Raining like a MF",
		subtitle: "For more info look outside",
	},
	Snow: {
		iconName: "weather-snowy",
		gradient: ["#7DE2FC", "#B9B6E5"],
		title: "Cold as balls",
		subtitle: "Do you want to build a snowman? ",
	},
	Atmosphere: {
		iconName: "weather-hail",
		gradient: ["#89F7FE", "#66A6FF"],
	},
	Clear: {
		iconName: "weather-sunny",
		gradient: ["#FF7300", "#FEF253"],
		title: "Sunny",
		subtitle: "Go get your * burnt",
	},
	Clouds: {
		iconName: "weather-cloudy",
		gradient: ["#D7D2CC", "#304352"],
		title: "Clouds",
		subtitle: "I know, boring",
	},
	Mist: {
		iconName: "weather-hail",
		gradient: ["#4DA0B0", "#D39D38"],
		title: "Mist!",
		subtitle: "It's like you have no glasses ",
	},
	Dust: {
		iconName: "weather-hail",
		gradient: ["#4DA0B0", "#D39D38"],
		title: "Dusty",
		subtitle: "no....",
	},
};

export default function Weather({ temp, condition }) {
	return (
		<LinearGradient
			// Background Linear Gradient
			colors={weatherOptions[condition].gradient}
			style={styles.container}
		>
			<StatusBar barStyle="light-content" />
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
				<Text style={styles.tempFont}>{temp}&#8451;</Text>
			</View>
			<View style={{ ...styles.halfContainer, ...styles.textLeftAlign }}>
				<Text style={styles.titleFont}>{weatherOptions[condition].title}</Text>
				<Text style={styles.subTitleFont}>{weatherOptions[condition].subtitle}</Text>
			</View>
		</LinearGradient>
	);
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		"Thunderstorm",
		"Drizzle",
		"Rain",
		"Snow",
		"Atmosphere",
		"Clear",
		"Clouds",
		"Mist",
		"Smoke",
		"Haze",
		"Dust",
		"Fog",
		"Sand",
	]).isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	halfContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	tempFont: {
		fontSize: 42,
		color: "#fff",
	},
	titleFont: { color: "white", fontSize: 44, fontWeight: "300", marginBottom: 10 },
	subTitleFont: { color: "white", fontSize: 24, fontWeight: "600" },
	textLeftAlign: {
		paddingHorizontal: 20,
		alignItems: "flex-start",
		width: "90%",
	},
});
