import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";

const buttonColors = {
  NUMBER: ["#71717a", "#3f3f46"],
  OPERATOR: ["#f59e0b", "#b45309"],
} as const;

interface ButtonProps {
  title: string;
  onPress: (operator: string) => void;
  buttonType?: "NUMBER" | "OPERATOR";
  style?: ViewStyle;
}

const Button = ({ buttonType = "NUMBER", onPress, style, title }: ButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? buttonColors[buttonType][1] : buttonColors[buttonType][0] },
        style,
      ]}
      onPressOut={() => {
        onPress(title);
      }}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  title: {
    color: "#fff",
    fontSize: 50,
  },
});

export default Button;
