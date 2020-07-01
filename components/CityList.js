import React from "react";
import { ScrollView, Text, View, Dimensions, StyleSheet } from "react-native";

const CityList = (props) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={true}
      onMomentumScrollEnd={() => {
        console.log("Scrolling is End");
      }}
    >
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>수원시</Text>
      </View>
      <View style={{ ...styles.viewStyle1 }}>
        <Text style={{ ...styles.textStyle, color: "#ccc" }}>삼성전자</Text>
      </View>
    </ScrollView>
  );
};
let screenWidth = Dimensions.get("window").width / 3;
let screenHeight = Dimensions.get("window").height / 15;
const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#35034e",
    flex: 1,
    borderRadius: 24,
    margin: 8,
    marginLeft: 20,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  viewStyle1: {
    backgroundColor: "white",
    flex: 1,

    margin: 8,
    marginLeft: 10,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },

  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 24,
    paddingVertical: 4,
    color: "white",
    textAlign: "center",
  },
});

export default CityList;
