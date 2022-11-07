import { Text, View } from "react-native";
import styles from "./News.styles";

interface NewsProps {
  title: string;
}

const News = ({ title }: NewsProps) => {
  return (
    <View style={styles.news}>
      <Text style={styles.bold}>{title}</Text>
      <Text style={styles.sm}>2022.11.13 (목)</Text>
    </View>
  );
};

export default News;
