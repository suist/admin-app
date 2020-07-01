import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import DefaultText from "./DefaultText";
const CityItem = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <DefaultText style={styles.title}>{props.cityName}</DefaultText>
        <DefaultText style={styles.title}>{props.percent}%</DefaultText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: { fontSize: 24 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  percent: {},
  titlePercent: {},
  subTitle: {},
});

export default CityItem;
