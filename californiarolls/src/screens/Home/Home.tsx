import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Details,
  DetailsListItem,
} from "../../components/DetailsListItem/DetailsListItem";
import { RouteParams } from "~/navigation/RootNavigator";

interface HomeProps { }

const detailsList: Details[] = [
  {
    id: "1",
    photo:
      "https://dl.airtable.com/ZuXJZ2NnTF40kCdBfTld_thomas-ashlock-64485-unsplash.jpg",
    surfBreak: "Reef Break",
    address: "Pipeline, Oahu, Hawaii",
  },
  {
    id: "2",
    photo:
      "https://dl.airtable.com/e3QoP3cFSyykZJOvWGIy_cesar-couto-477018-unsplash%20(1).jpg",
    surfBreak: "Sunny Joy",
    address: "upertubes, Jeffreys Bay, South Africa ",
  }
];

export const Home: React.FunctionComponent<HomeProps> = ({ }) => {
  const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

  const renderListItem = ({ item }: { item: Details }) => {
    const onDetailsPress = () => {
      console.log(item.surfBreak);
      navigation.navigate("Details", {
        id: item.id,
        title: item.surfBreak,
        image: item.photo,
        description: item.address,
      });
    };
    return (
      <DetailsListItem key={item.id} onPress={onDetailsPress} details={item} />
    );
  };

  const listSeparator = () => (
    <View style={styles.separator}/>
  );

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={detailsList}
          renderItem={renderListItem}
          ItemSeparatorComponent={listSeparator}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
  },
})
