/* eslint-disable prettier/prettier */
import React from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import GameDetailScreen from '../screens/GameDetailScreen';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='GameDetails' component={GameDetailScreen} options={({route}) => ({
                title: route.params?.title,
            })}/>
        </Stack.Navigator>
    );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: { backgroundColor: '#AD40AF' },
            tabBarActiveTintColor: 'yellow',
            tabBarInactiveTintColor: '#fff',
        }}>
            <Tab.Screen name='Home2' component={HomeStackNavigator} options={({route}) => ({
                tabBarStyle: {display: getTabBarVisibility(route), backgroundColor: '#AD40AF'},
                tabBarIcon: ({color, size}) => (<Ionicons name='home-outline' color={color} size={size}/>)
            })}/>
            <Tab.Screen name='Cart' component={CartScreen} options={{
                tabBarBadge: 3,
                tabBarBadgeStyle: {backgroundColor: 'yellow'},
                tabBarIcon: ({color, size}) => (<Feather name='shopping-bag' color={color} size={size}/>)
            }} />
            <Tab.Screen name='Favorite' component={FavoriteScreen} options={{
                tabBarIcon: ({color, size}) => (<Ionicons name='heart-outline' color={color} size={size}/>)
            }} />
        </Tab.Navigator>
    )
}

const getTabBarVisibility = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
    if (routeName === 'GameDetails')
    {
        return 'none';
    }
    else {
        return 'flex';
    }
};

export default TabNavigator;