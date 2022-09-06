import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { RootNavigator } from "./src/navigation/RootNavigator";

const buttonPressed = () => {
  console.log("button pressed");
};
export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
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
