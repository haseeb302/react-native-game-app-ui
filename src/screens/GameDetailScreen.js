/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';

export default function GameDetailScreen({navigation, route}) {
    return (
        <View>
            <Text> Game Detail Screen </Text>
            <Text>{route.params?.id}</Text>
            <Text>{route.params?.title}</Text>
        </View>
    );
}
