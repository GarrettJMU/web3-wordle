import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import ScreenHeader from '../src/components/ScreenHeader';
import GameScreen from '../src/GameScreen';
import {WagmiConfig} from 'wagmi';
import {config} from '../src/chainUtils';

export default function App() {
    return (
        <WagmiConfig config={config}>
            <View style={styles.container}>
                <SafeAreaView style={styles.container}>
                    <ScreenHeader/>
                    <GameScreen/>
                </SafeAreaView>
            </View>
        </WagmiConfig>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
});
