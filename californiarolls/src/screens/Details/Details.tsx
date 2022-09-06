import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";


import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { RouteParams } from "../../navigation/RootNavigator";

interface ProfileProps { }

export const Details: React.FunctionComponent<ProfileProps> = ({ }) => {
  const route = useRoute<RouteProp<RouteParams>>();

  const buttonPressed = () => {
    console.log("button pressed");
  };
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://dl.airtable.com/ZuXJZ2NnTF40kCdBfTld_thomas-ashlock-64485-unsplash.jpg'
        }}
        resizeMode="cover"
        style={
          [{
            width: '100%',
            height: '35%',
          }]}
      />
      <Text style={styles.tilte}>Reef Break</Text>
      <Text style={styles.address}> 📍 Pipeline, Oahu, Hawaii</Text>
      <Text style={styles.address}> ⭐ 4/5</Text>
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
