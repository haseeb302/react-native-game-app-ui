/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { windowWidth } from '../utils/Dimensions';

const ListItem = ({photo, title, subTitle, isFree, price, onPress}) => {
  return (
    <View style={styles.main}>
        <View style={styles.container}>
            <Image source={photo} style={styles.image}/>
            <View style={{ width: windowWidth - 220 }}>
                <Text style={[styles.text, {color: '#333'}]} numberOfLines={1}>{title}</Text>
                <Text>{subTitle}</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.playBtn} onPress={onPress}>
            {isFree === 'Yes' && <Text style={[styles.text, {textAlign: 'center'}]}>Play</Text>}
            {isFree === 'No' && <Text style={[styles.text, {textAlign: 'center'}]}>{price}</Text>}
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 55,
        height:55,
        borderRadius: 10,
        marginRight: 8,
    },
    playBtn: {
        backgroundColor: '#0aada8',
        padding: 10,
        width: 100,
        borderRadius: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
});

export default ListItem;
