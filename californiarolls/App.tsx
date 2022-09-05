import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.tilte}>Reef Break</Text>
      <Image
        source={{
          uri: 'https://dl.airtable.com/ZuXJZ2NnTF40kCdBfTld_thomas-ashlock-64485-unsplash.jpg'
        }}
        resizeMode="cover"
        style={[
            {
              width: 240,
              height: 160,
              borderRadius: 10,
            }]}
        />
      <Text style={styles.address}>Address: Pipeline, Oahu, Hawaii</Text>
      <Text style={styles.address}> Difficulty Level: 🏄 🏄 🏄 🏄</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
    borderColor: "red",
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  tilte: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
    marginTop: 10,
  },
  address: {
    marginTop: 10,
    color: 'darkgrey',
  }
});
