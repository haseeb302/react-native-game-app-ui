/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Tabs = ({selectionMode, option1, option2, onSelectSwitch }) => {

    const [getSelectionMode, setSelectionMode] = useState(selectionMode);

    const updateSwitchData = (value) => {
        setSelectionMode(value);
        onSelectSwitch(value);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity 
            activeOpacity={1} 
            onPress={() => updateSwitchData(1)}
            style={{
                flex: 1,
                backgroundColor: getSelectionMode === 1 ? '#AD40AF' : '#e4e4e4',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
                <Text style={{ color: getSelectionMode === 1 ? 'white' : '#AD40AF' }}>{option1}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            activeOpacity={1} 
            onPress={() => updateSwitchData(2)}
            style={{
                flex: 1,
                backgroundColor: getSelectionMode === 2 ? '#AD40AF' : '#e4e4e4',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
                <Text style={{ color: getSelectionMode === 2 ? 'white' : '#AD40AF' }}>{option2}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 44,
        width: '100%',
        backgroundColor: '#e4e4e4',
        borderRadius: 10,
        borderColor: '#AD40AF',
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

export default Tabs;
