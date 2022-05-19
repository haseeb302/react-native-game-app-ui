/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Feather from 'react-native-vector-icons/Feather';
import ListItem from '../components/ListItem';
import Slider from '../components/Slider';
import Tabs from '../components/Tabs';

import { sliderData, freeGames, paidGames } from '../model/data';
import { windowWidth } from '../utils/Dimensions';

const HomeScreen = ({navigation}) => {
    const [gamesTab, setGamesTab] = useState(1);

    const renderSlider = ({item, index}) => {
        return <Slider data={item}/>
    }

    const onSelectSwitch = (value) => {
        setGamesTab(value);
    }

    return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <View style={styles.topBar}>
                <Text style={styles.heading}>Hello, Abdul</Text>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <ImageBackground source={require('../assets/images/user-profile.jpg')} style={styles.profileImg} imageStyle={{ borderRadius: 25 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.searchBarContainer}>
                <Feather name='search' size={30} color="#C6C6C6" style={{margin: 5}}/>
                <TextInput placeholder='Search' style={{ width: '100%' }} />
            </View>
            <View>
                <View style={[styles.topBar, { marginVertical: 15 }]}>
                    <Text style={[styles.heading, {fontSize: 16}]}>Upcoming Games</Text>
                    <TouchableOpacity>
                        <Text style={styles.link}>See all</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Carousel
                data={sliderData}
                renderItem={renderSlider}
                sliderWidth={windowWidth - 40}
                itemWidth={300}
                loop={true}
            />
            <View style={{ marginVertical: 20 }}>
                <Tabs selectionMode={1} option1="Free To Play" option2="Paid Games" onSelectSwitch={onSelectSwitch} />
                <View style={{ marginVertical: 20 }}>
                    {gamesTab === 1 && freeGames.map((item) => (
                            <ListItem 
                            key={item.id} 
                            photo={item.poster} 
                            title={item.title} 
                            subTitle={item.subtitle} 
                            isFree={item.isFree} 
                            onPress={() => navigation.navigate("GameDetails", {title: item.title, id: item.id})}
                            />
                        )
                    )}
                    {gamesTab === 2 && paidGames.map((item) => (
                            <ListItem 
                            key={item.id} 
                            photo={item.poster} 
                            title={item.title} 
                            subTitle={item.subtitle} 
                            isFree={item.isFree} 
                            price={item.price} 
                            onPress={() => navigation.navigate("GameDetails", {title: item.title, id: item.id})}
                            />
                        )
                    )}
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    profileImg: {
        width: 35,
        height: 35,
    },
    scrollView: {
        padding: 20,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Roboto-Medium',
    },
    searchBarContainer: {
        flexDirection: 'row',
        borderColor: "#C6C6C6",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    link: {
        color: '#0aada8',
    }
});

export default HomeScreen;
