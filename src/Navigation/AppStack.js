/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ProfileScreen from '../screens/ProfileScreen';
import MessageScreen from '../screens/MessageScreen';
import MomentScreen from '../screens/MomentScreen';
import SettingScreen from '../screens/SettingScreen';

import TabNavigator from './TabNavigator';

import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export default function AppStack() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#aa18ea',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {marginLeft: -25, fontWeight: 'bold', fontSize: 16 },
            }}>
            <Drawer.Screen component={TabNavigator} name="Home" options={{
                drawerIcon: ({color}) => (<Ionicons name='home-outline' size={22} color={color} />)
            }} />
            <Drawer.Screen component={ProfileScreen} name="Profile" options={{
                drawerIcon: ({color}) => (<Ionicons name='person-outline' size={22} color={color} />)
            }} />
            <Drawer.Screen component={MessageScreen} name="Message" options={{
                drawerIcon: ({color}) => (<Ionicons name='chatbox-ellipses-outline' size={22} color={color} />)
            }} />
            <Drawer.Screen component={MomentScreen} name="Moments" options={{
                drawerIcon: ({color}) => (<Ionicons name='timer-outline' size={22} color={color} />)
            }} />
            <Drawer.Screen component={SettingScreen} name="Setting" options={{
                drawerIcon: ({color}) => (<Ionicons name='settings-outline' size={22} color={color} />)
            }} />
        </Drawer.Navigator>
    );
}
