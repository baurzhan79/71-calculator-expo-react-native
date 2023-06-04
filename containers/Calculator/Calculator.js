import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

import СalculatorButton from "../../components/СalculatorButton/СalculatorButton";

const Calculator = () => {
    const [calculationLine, setCalculationLine] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const addSymbol = (value) => {
        setErrorMessage("");
        setCalculationLine(calculationLine + value);
    }

    const eraseSymbol = () => {
        setErrorMessage("");
        setCalculationLine(calculationLine.substring(0, calculationLine.length - 1));
    }

    const clearCalculationLine = () => {
        setErrorMessage("");
        setCalculationLine("");
    }

    const calculate = () => {
        try {
            const result = eval(calculationLine);
            setCalculationLine(result.toString());
        }
        catch (e) {
            setErrorMessage("Ошибка! Строка расчета указана неверно!");
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} value={calculationLine} />
            <View style={styles.buttons}>
                <View style={styles.leftSide}>
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"7"}
                        onTouchablePressed={() => addSymbol("7")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"8"}
                        onTouchablePressed={() => addSymbol("8")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"9"}
                        onTouchablePressed={() => addSymbol("9")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"4"}
                        onTouchablePressed={() => addSymbol("4")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"5"}
                        onTouchablePressed={() => addSymbol("5")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"6"}
                        onTouchablePressed={() => addSymbol("6")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"1"}
                        onTouchablePressed={() => addSymbol("1")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"2"}
                        onTouchablePressed={() => addSymbol("2")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"3"}
                        onTouchablePressed={() => addSymbol("3")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"."}
                        onTouchablePressed={() => addSymbol(".")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"0"}
                        onTouchablePressed={() => addSymbol("0")}
                    />
                    <СalculatorButton
                        btnStyle={styles.numericButtons}
                        btnText={"<"}
                        onTouchablePressed={() => eraseSymbol("<")}
                    />
                </View>
                <View style={styles.rightSide}>
                    <СalculatorButton
                        btnStyle={styles.actionButtons}
                        btnText={"+"}
                        onTouchablePressed={() => addSymbol("+")}
                    />
                    <СalculatorButton
                        btnStyle={styles.actionButtons}
                        btnText={"-"}
                        onTouchablePressed={() => addSymbol("-")}
                    />
                    <СalculatorButton
                        btnStyle={styles.actionButtons}
                        btnText={"*"}
                        onTouchablePressed={() => addSymbol("*")}
                    />
                    <СalculatorButton
                        btnStyle={styles.actionButtons}
                        btnText={"/"}
                        onTouchablePressed={() => addSymbol("/")}
                    />
                    <СalculatorButton
                        btnStyle={styles.resultButtons}
                        btnText={"="}
                        onTouchablePressed={() => calculate("=")}
                    />
                    <СalculatorButton
                        btnStyle={styles.resultButtons}
                        btnText={"CE"}
                        onTouchablePressed={() => clearCalculationLine("CE")}
                    />
                    <СalculatorButton
                        btnStyle={styles.unavailableButtons}
                    />
                    <СalculatorButton
                        btnStyle={styles.unavailableButtons}
                    />
                </View>
            </View>
            <Text onPress={() => setErrorMessage("")}>{errorMessage}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
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