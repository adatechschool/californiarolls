import React, { Children } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface ButtonProps {
  children: string;
  type?: "primary" | "secondary";
  onPress: () => void;
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  type = "primary",
  children,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.textButton}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    width: '50%',
    height: '50px',
    backgroundColor: '#007DE4',
    marginLeft: '25%',
    justifyContent: 'center',
    marginTop: 25,
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontWeight: "bold",
  },
})
