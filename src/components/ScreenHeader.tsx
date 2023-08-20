import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAccount, useConnect} from 'wagmi';
import {InjectedConnector} from 'wagmi/connectors/injected';
import {fetchEnsName} from '../chainUtils';
import Button from "./Button";

const ScreenHeader = () => {
  const [ensName, setEnsName] = useState('');
  const {address} = useAccount();
  const {connect} = useConnect({
    connector: new InjectedConnector(),
  });

  useEffect(() => {
    if (address) {
      fetchEnsName(address).then(name => {
        setEnsName(name);
      });
    }
  }, [address]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wordle</Text>
      {address && (
        <Text style={styles.subtitle}>Connected to {ensName || address}</Text>
      )}
      {!address && <Button onPress={() => connect()} cta="Connect Wallet"/>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#df928e',
    fontWeight: '200',
    fontSize: 32,
  },
  subtitle: {
    color: '#91e5f6',
    fontWeight: '400',
    fontSize: 12,
  },
});

export default ScreenHeader;
