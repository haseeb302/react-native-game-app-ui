/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function CustomDrawer(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView contentContainerStyle={styles.drawerContainer}>
                <ImageBackground source={require('../assets/images/menu-bg.jpeg')} style={styles.bgImg}>
                    <Image 
                        source={require('../assets/images/user-profile.jpg')} 
                        style={styles.profileImg}
                    />
                    <Text style={styles.profileName}>Jon Doe</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.coinTxt}>280 Coins</Text>
                        <FontAwesome5 name='coins' size={14} color='yellow' />
                    </View>
                </ImageBackground>
                <View style={styles.drawerItemList}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name='share-social-outline' size={22} />
                        <Text style={{ fontSize: 16, marginLeft: 5, fontWeight: 'bold' }}>Share</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name='exit-outline' size={22} />
                        <Text style={{ fontSize: 16, marginLeft: 5, fontWeight: 'bold' }}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContainer: {
        backgroundColor: '#8200d6',
    },
    bgImg: {
        padding: 20,
    },
    profileImg: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    profileName: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    coinTxt: {
        color: '#fff',
        fontWeight: 'bold',
        marginRight: 5,
    },
    drawerItemList: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
    },
});
