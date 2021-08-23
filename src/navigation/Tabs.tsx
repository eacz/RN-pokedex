import React from 'react'
import {Platform} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen';
import StackNavigator from './navigator';
import Icon  from 'react-native-vector-icons/Ionicons';

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
        name="StackScreen" component={StackNavigator} 
      />
      <Tab.Screen
        options={{tabBarIcon: () => (<Icon name="search-outline" size={25}  color="#1976d2" />), tabBarLabel: 'Search'}} 
        name="SearchScreen" component={SearchScreen} 
      />
    </Tab.Navigator>
  );
}

export default Tabs