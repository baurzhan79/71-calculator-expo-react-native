import React from "react";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";

const СalculatorButton = (props) => {
    return (
        <TouchableHighlight
            activeOpacity={0.5}
            underlayColor="gray"
            onPress={props.onTouchablePressed}>
            <View style={props.btnStyle}>
                <Text style={styles.text}>{props.btnText}</Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    text: {
        width: 50,
        height: 70,
        fontSize: 16,
        textAlign: "center",
        paddingTop: 25
    },
});

export default СalculatorButton