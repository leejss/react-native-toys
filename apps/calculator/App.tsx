import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Button from "./components/Button";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const operators = {
  CLEAR: "C",
  PLUS: "+",
  MINUS: "-",
  EQUAL: "=",
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function App() {
  const windowWidth = useWindowDimensions().width;
  const width = windowWidth / 4;
  const [result, setResult] = useState(0);
  const [formular, setFormular] = useState<string[]>([]);

  const handlePressNumber = (number: string) => {
    const n = Number(number);
    const last = formular[formular.length - 1];

    if (!last || Object.values(operators).includes(last)) {
      // empty or operator
      setResult(n);
      setFormular((prev) => [...prev, number]);
    } else {
      // number
      const newNumber = (parseInt(last) ?? 0) * 10 + n;
      setResult(newNumber);
      setFormular((prev) => {
        prev.pop();
        return [...prev, String(newNumber)];
      });
    }
  };
  const calculate = () => {
    let calc = 0;
    let op = "";
    formular.forEach((val) => {
      if ([operators.PLUS, operators.MINUS].includes(val)) {
        op = val;
      } else {
        if (op === operators.PLUS) {
          calc += parseInt(val);
        } else if (op === operators.MINUS) {
          calc -= parseInt(val);
        } else {
          calc = parseInt(val);
        }
      }
    });
    setResult(calc);
    setFormular([]);
  };

  const handlePressOperator = (operator: string) => {
    if (operator === operators.CLEAR) {
      setResult(0);
      setFormular([]);
    }
    if (operator === operators.MINUS || operator === operators.PLUS) {
      const last = formular[formular.length - 1];
      if (last === operators.PLUS || last === operators.MINUS) {
        setFormular((prev) => {
          prev.pop();
          return [...prev, operator];
        });
      } else {
        setFormular((prev) => [...prev, operator]);
      }
    }
    if (operator === operators.EQUAL) {
      // calculate
      calculate();
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.resultContainer}>
        <Text style={styles.text}>{result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.leftPad}>
          <View style={styles.number}>
            {numbers.map((n) => (
              <Button
                onPress={handlePressNumber}
                key={n}
                title={String(n)}
                style={{
                  width,
                  height: width,
                }}
              />
            ))}
          </View>
          <View style={styles.bottom}>
            <Button
              onPress={handlePressNumber}
              title="0"
              style={{
                width: width * 2,
                height: width,
              }}
            />
            <Button
              onPress={handlePressOperator}
              buttonType="OPERATOR"
              title="="
              style={{
                width,
                height: width,
              }}
            />
          </View>
        </View>

        <View>
          <Button
            onPress={handlePressOperator}
            title={operators.CLEAR}
            buttonType="OPERATOR"
            style={{
              width,
              height: width,
            }}
          />
          <Button
            onPress={handlePressOperator}
            title={operators.MINUS}
            buttonType="OPERATOR"
            style={{
              width,
              height: width,
            }}
          />
          <Button
            onPress={handlePressOperator}
            title={operators.PLUS}
            buttonType="OPERATOR"
            style={{
              width,
              height: width * 2,
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  resultContainer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttonContainer: {
    backgroundColor: "#234",
    flexDirection: "row",
  },
  text: {
    fontSize: 60,
    fontWeight: "600",
    color: "#fff",
    paddingBottom: 30,
    paddingRight: 30,
  },
  leftPad: {
    flex: 1,
  },
  number: {
    flexDirection: "row",
    flexWrap: "wrap-reverse",
  },
  bottom: {
    flexDirection: "row",
  },
});
