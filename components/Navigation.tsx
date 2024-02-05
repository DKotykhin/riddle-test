import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { HomeScreen, LeaderBoardScreen, SettingsScreen } from '../screens/_index';

import { SvgHome, SvgLeader, SvgSettings } from '../constants/svg';
import { SCREENS } from '../constants/screens';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: () => {
          if (route.name === SCREENS.HOME) {
            return <SvgHome />;
          } else if (route.name === SCREENS.LEADER_BOARD) {
            return <SvgLeader />;
          } else if (route.name === SCREENS.SETTINGS) {
            return <SvgSettings />;
          }
        },
        tabBarActiveTintColor: '#3D444F',
        tabBarInactiveTintColor: '#5F6F89',
        tabBarStyle: {
          backgroundColor: '#E7EBFF',
          height: 90,
        },
      })}>
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="LeaderBoard" component={LeaderBoardScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
