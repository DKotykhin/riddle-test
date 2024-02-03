import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { Home } from '../screens/Home';
import { LeaderBoard } from '../screens/LeaderBoard';
import { Settings } from '../screens/Settings';

import { SvgHome, SvgLeader, SvgSettings } from '../constants/svg';
import { color } from '../constants/colors';

const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: () => {
          if (route.name === 'Home') {
            return <SvgHome />;
          } else if (route.name === 'LeaderBoard') {
            return <SvgLeader />;
          } else if (route.name === 'Settings') {
            return <SvgSettings />;
          }
        },
        tabBarActiveTintColor: color.black,
        tabBarInactiveTintColor: color.grey,
        tabBarStyle: {
          backgroundColor: '#E7EBFF',
          height: 100,
        },
      })}>
        <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Tab.Screen name="LeaderBoard" component={LeaderBoard} options={{ headerShown: false }} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
