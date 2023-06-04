import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

import СalculatorButton from "../../components/СalculatorButton/СalculatorButton";

const Calculator = () => {
    const [calculationLine, setCalculationLine] = useState("");

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} value={calculationLine} />
            <View style={styles.buttons}>
                <View style={styles.leftSide}>
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"7"}
                        onTouchablePressed={() => console.log("Button 7 has pressed")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"8"}
                        onTouchablePressed={() => console.log("Button 8 has pressed")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"9"}
                        onTouchablePressed={() => console.log("Button 9 has pressed")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"4"}
                        onTouchablePressed={() => console.log("Button 4 has pressed")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"5"}
                        onTouchablePressed={() => console.log("Button 5 has pressed")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"6"}
                        onTouchablePressed={() => console.log("Button 6 has pressed")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"1"}
                        onTouchablePressed={() => console.log("Button 1 has pressed")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"2"}
                        onTouchablePressed={() => console.log("Button 2 has pressed")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"3"}
                        onTouchablePressed={() => console.log("Button 3 has pressed")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"."}
                        onTouchablePressed={() => console.log("Button . has pressed")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"0"}
                        onTouchablePressed={() => console.log("Button 0 has pressed")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"<"}
                        onTouchablePressed={() => console.log("Button < has pressed")}
                    />
                </View>
                <View style={styles.rightSide}>
                    <СalculatorButton
                        btnStyle={styles.actionButtons}
                        btnText={"+"}
                        onTouchablePressed={() => console.log("Button + has pressed")}
                    />
                    <СalculatorButton
                        btnStyle={styles.actionButtons}
                        btnText={"-"}
                        onTouchablePressed={() => console.log("Button - has pressed")}
                    />
                    <СalculatorButton
                        btnStyle={styles.actionButtons}
                        btnText={"*"}
                        onTouchablePressed={() => console.log("Button * has pressed")}
                    />
                    <СalculatorButton
                        btnStyle={styles.actionButtons}
                        btnText={"/"}
                        onTouchablePressed={() => console.log("Button / has pressed")}
                    />
                    <СalculatorButton
                        btnStyle={styles.resultButtons}
                        btnText={"="}
                        onTouchablePressed={() => console.log("Button = has pressed")}
                    />
                    <СalculatorButton
                        btnStyle={styles.resultButtons}
                        btnText={"CE"}
                        onTouchablePressed={() => console.log("Button CE has pressed")}
                    />
                    <СalculatorButton
                        btnStyle={styles.unavailableButtons}
                    />
                    <СalculatorButton
                        btnStyle={styles.unavailableButtons}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#000",
        maxWidth: 300,
        marginLeft: "auto",
        marginRight: "auto"
    },
    buttons: {
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "lightyellow",
        justifyContent: "center"
    },
    leftSide: {
        maxWidth: 170,
        flexWrap: "wrap",
        flexDirection: "row"
    },
    rightSide: {
        maxWidth: 110,
        flexWrap: "wrap",
        flexDirection: "row",
    },
    textInput: {
        maxWidth: 280,
        width: "100%",
        height: 40,
        fontSize: 16,
        borderColor: "lightgray",
        borderWidth: 1
    },
    numericButtons: {
        backgroundColor: "lightsteelblue",
        margin: 2
    },
    actionButtons: {
        backgroundColor: "darkkhaki",
        margin: 2
    },
    resultButtons: {
        backgroundColor: "burlywood",
        margin: 2
    },
    unavailableButtons: {
        backgroundColor: "lightgray",
        margin: 2
    }
});

export default Calculator