import React from "react";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";

import { Card } from "~/components/Card";

export type Details = {
  id: string;
  photo: string;
  surfBreak: string;
  address: string;
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
      <View>
        <Image
          source={{
            uri: details.photo,
          }}
          resizeMode="cover"
          style={[
            {
              width: 92,
              height: 92,
            },
          ]}
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
