import React from "react";
import { View, Text, StyleSheet, StatusBar }from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm in the house",
        subtitle: "밖에 번개가 치니 조심!"
      },
      Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "이슬비가 내리니 우산 꼭! "
      },
      Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subtitle: "우산을 안챙기면 비맞은 생쥐 꼴이 된답니다~ "
      },
      Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "나랑 같이 눈사람 안만들래? 그래..안녕"
      },
      Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
      },
      Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Sunny as fuck",
        subtitle: "이런 날씨에 안날갈수가 없죠!"
      },
      Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "구름이 많이 끼었어요"
      },
      Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist!",
        subtitle: "옅은 안개가 끼어있어요!"
      },
      Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dusty",
        subtitle: "밖에 먼지가 많으니 마스크꼭 착용!"
      },
      Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "짙은 안개가 끼었으니 조심!또 조심!"
      }
    };

export default function Weather({ temp,condition }) {
 return (    
    <LinearGradient
    colors={weatherOptions[condition].gradient}
    style={styles.container}
  >
    <StatusBar barStyle="light-content" />
    <View style={styles.halfContainer}>
      <MaterialCommunityIcons
        size={96}
        name={weatherOptions[condition].iconName}
        color="white"
      />
      <Text style={styles.temp}>{temp}°</Text>
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.title}>{weatherOptions[condition].title}</Text>
      <Text style={styles.subtitle}>
        {weatherOptions[condition].subtitle}
      </Text>
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
    "Haze",
    "Mist",
    "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    temp: {
        fontSize: 42,
        color: "white"
    },

    halfContainer : {
        flex: 1,
        justifyContent:"center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24,
        textAlign: "left"
      },
      textContainer: {
        alignItems: "flex-start",
        paddingHorizontal: 40,
        justifyContent: "center",
        flex: 1
      }
    });