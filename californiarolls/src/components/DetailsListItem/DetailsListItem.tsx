import React from "react";
import { Image, Text, TouchableWithoutFeedback, View, StyleSheet } from "react-native";

import { Card } from "~/components/Card";

export type Details = {
  id: string;
  photo: string;
  surfBreak: string;
  address: number[];
  difficulty: number;
};

interface DetailsListItemProps {
  onPress: () => void;
  details: Details;
}

export const DetailsListItem: React.FunctionComponent<DetailsListItemProps> = ({
  onPress,
  details,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{
            uri: details.photo,
          }}
          resizeMode="cover"
          style={
            styles.img
          }
        />
        <View>
          <Text>{details.surfBreak}</Text>
          <Text>
            {details.address}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      width: '100%',
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    img: {
      width: 250,
      height: 250,
    },
  }
)
