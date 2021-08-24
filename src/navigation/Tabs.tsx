import React from 'react'
import {Platform} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen';
import ListStack from './ListStack';
import Icon  from 'react-native-vector-icons/Ionicons';
import SearchStack from './SearchStack';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown: false, 
        tabBarActiveTintColor: '#004ba0',
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 5
        },
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.92)',
          borderWidth: 0,
          elevation: 0,
        }
      }}
    >
      <Tab.Screen 
        options={{tabBarIcon: () => (<Icon name="list-outline" size={25}  color="#1976d2" />), tabBarLabel: 'List'}} 
        name="StackScreen" component={ListStack} 
      />
      <Tab.Screen
        options={{tabBarIcon: () => (<Icon name="search-outline" size={25}  color="#1976d2" />), tabBarLabel: 'Search',}} 
        name="SearchStack" component={SearchStack} 
      />
    </Tab.Navigator>
  );
}

export default Tabs