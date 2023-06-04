import { StyleSheet, View } from "react-native";
import СalculatorButton from "./components/СalculatorButton/СalculatorButton";

export default function App() {
  return (
    <View style={styles.container}>
      <СalculatorButton
        btnStyle={{ backgroundColor: "lightblue", width: 50, height: 70 }}
        btnText={"Кнопка"}
        onTouchablePressed={() => console.log("Button has pressed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
