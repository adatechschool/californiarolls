import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, FlatList, View, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Details,
  DetailsListItem,
} from "../../components/DetailsListItem/DetailsListItem";
import { RouteParams } from "~/navigation/RootNavigator";

import { Card } from "../../components/Card";

interface HomeProps { }

const detailsList: Details[] = [
  {
    id: "1",
    photo:
      "https://dl.airtable.com/ZuXJZ2NnTF40kCdBfTld_thomas-ashlock-64485-unsplash.jpg",
    surfBreak: "Reef Break",
    difficulty: 4,
    address: [21.666836, -158.057222] //parser avec Geocoder
  },

  {
    id: "2",
    photo:
      "https://dl.airtable.com/e3QoP3cFSyykZJOvWGIy_cesar-couto-477018-unsplash%20(1).jpg",
    surfBreak: "Sunny Joy",
    address: [37.9, -122.683333],
    difficulty: 5,
  },
  {
    id: "3",
    photo:
      "https://dl.airtable.com/YzqA020RRLaTyAZAta9g_brandon-compagne-308937-unsplash.jpg",
    surfBreak: "Point Break",
    address: [37.9, -122.683333],
    difficulty: 4,
  }
];

export const Home: React.FunctionComponent<HomeProps> = ({ }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const renderListItem = ({ item }: { item: Details }) => {
    const onDetailsPress = () => {
      console.log(item.surfBreak);
      navigation.navigate("Details", { //méthode propre à RN
        id: item.id,
        title: item.surfBreak,
        image: item.photo,
        address: item.address,
        difficulty: item.difficulty,
      });
    };
    return (
      <DetailsListItem key={item.id} onPress={onDetailsPress} details={item} />
    );
  };

  // const listSeparator = () => (
  //   // <View style={styles.separator} />
  // );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={detailsList}
          renderItem={renderListItem}
        // ItemSeparatorComponent={listSeparator}
        // horizontal={true}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width,
    // height: '100%',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
  },


})