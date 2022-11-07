import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/home";
import Scrap from "../screens/scrap/scrap";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tabs.Screen
        name="홈"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons size={24} name="home" color={focused ? "white" : "gray"} />
          ),
        }}
      />
      <Tabs.Screen
        name="스크랩"
        component={Scrap}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons size={24} name="document" color={focused ? "white" : "gray"} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
