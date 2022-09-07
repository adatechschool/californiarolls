import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";


import { Button } from "../../components/Button";
import { RouteParams } from "../../navigation/RootNavigator";

interface DetailsProps { }

export const Details: React.FunctionComponent<DetailsProps> = ({ }) => {
  const route = useRoute<RouteProp<RouteParams>>();

  const buttonPressed = () => {
    console.log("button pressed");
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: route.params?.image
        }}
        resizeMode="cover"
        style={
          [{
            width: '100%',
            height: '35%',
          }]}
      />
      <Text style={styles.tilte}>{route.params?.title}</Text>
      <Text style={styles.address}> 📍 {route.params?.address}</Text>
      <Text style={styles.address}> ⭐ {route.params?.difficulty}</Text>
      <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices erat sed ipsum finibus, non laoreet est sagittis. Suspendisse malesuada elit non ligula ullamcorper, posuere vestibulum diam dapibus. Pellentesque mollis mauris vitae tellus porta, sit amet rutrum ipsum dignissim. Proin sit amet blandit libero</Text>
      <Button onPress={buttonPressed}>Ajouter aux Favoris 💓</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tilte: {
    fontWeight: 'bold',
    color: '#123348',
    fontSize: 24,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 20,
  },
  address: {
    marginTop: 10,
    color: '#123348',
    marginLeft: 20,
  },
  text: {
    marginBottom: 10,
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
    textAlign: 'justify',
    lineHeight: 25,
    color: '#5F6D7C'
  },
});
