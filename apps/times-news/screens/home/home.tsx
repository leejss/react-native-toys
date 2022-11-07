import { FlatList, SafeAreaView, Text, View } from "react-native";
import News from "./components/News";
import styles from "./home.styles";

const Home = () => {
  return (
    <SafeAreaView style={styles.home}>
      <View style={styles.wrapper}>
        {/* <News title="Who Will Win the Battle for Congress? Here Are Four Scenarios." /> */}
        <FlatList
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 8,
              }}
            />
          )}
          data={new Array(20)}
          renderItem={() => (
            <News title="Who Will Win the Battle for Congress? Here Are Four Scenarios." />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
