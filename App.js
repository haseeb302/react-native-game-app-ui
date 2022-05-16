import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GamingImg from './src/assets/images/gaming.svg';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Main}
          name="main"
          options={{headerShown: false}}
        />
        <Stack.Screen component={Home} name="home" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Main = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{marginTop: 20}}>
        <Text style={styles.heading}>ABC</Text>
      </View>
      <View style={styles.imageContainer}>
        <GamingImg width={300} height={300} style={styles.img} />
      </View>
      <TouchableOpacity
        style={styles.customButton}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('home')}>
        <Text style={styles.btnText}>Let's Start</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Home = () => {
  return (
    <View>
      <Text>Hello Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#20315f',
  },
  customButton: {
    backgroundColor: '#AD40AF',
    padding: 20,
    width: '90%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Roboto-MediumItalic',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    transform: [{rotate: '-15deg'}],
  },
});

export default App;
