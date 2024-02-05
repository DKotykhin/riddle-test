import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { HomeScreen, LeaderBoardScreen, SettingsScreen } from '../screens/_index';

import { SvgHome, SvgHomeInactive, SvgLeader, SvgLeaderInactive, SvgSettings, SvgSettingsInactive } from '../constants/svg';
import { SCREENS } from '../constants/screens';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === SCREENS.HOME) {
            return focused ? <SvgHome /> : <SvgHomeInactive />;
          } else if (route.name === SCREENS.LEADER_BOARD) {
            return focused ? <SvgLeader /> : <SvgLeaderInactive />;
          } else if (route.name === SCREENS.SETTINGS) {
            return focused ? <SvgSettings /> : <SvgSettingsInactive />;
          }
        },
        tabBarActiveTintColor: '#3D444F',
        tabBarInactiveTintColor: '#5F6F89',
        tabBarStyle: {
          backgroundColor: '#E7EBFF',
          height: 90,
          borderTopWidth: 0,
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
