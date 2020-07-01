import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as Permissions from "expo-permissions";

const QRScreens = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA);
    if (result.status !== "granted") {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grant camera permissions to use this app.",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  };
  verifyPermissions();

  //   useEffect(() => {
  //     (async () => {
  //       const { status } = await BarCodeScanner.requestPermissionsAsync();
  //       setHasPermission(status === "granted");
  //     })();
  //   }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  //   if (hasPermission === null) {
  //     return <Text>Requesting for camera permission</Text>;
  //   }
  //   if (hasPermission === false) {
  //     return <Text>No access to camera</Text>;
  //   }

  return (
    <View style={styles.screen}>
      <View style={styles.QR}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ flex: 1 }}
        />
      </View>

      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  QR: {
    marginTop: 200,
    width: 150,
    height: 150,
  },
});

export default QRScreens;
