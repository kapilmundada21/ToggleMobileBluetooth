import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import BluetoothStateManager from 'react-native-bluetooth-state-manager';

const App = () => {
  const [isBluetoothEnabled, setIsBluetoothEnabled] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    checkBluetoothState();
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
          {
            title: 'Bluetooth Permission',
            message: 'App needs access to Bluetooth',
            buttonPositive: 'OK',
          },
        );

        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          Alert.alert(
            'Permission required',
            'Please allow Bluetooth permission to continue.',
          );
        }
      } catch (err) {
        console.warn('Permission error:', err);
      }
    }
  };

  const checkBluetoothState = async () => {
    const state = await BluetoothStateManager.getState();
    setIsBluetoothEnabled(state === 'PoweredOn');
  };

  const toggleBluetooth = async () => {
    try {
      if (isBluetoothEnabled) {
        await BluetoothStateManager.disable();
        setStatusMessage('Bluetooth disabled successfully');
      } else {
        await BluetoothStateManager.enable();
        setStatusMessage('Bluetooth enabled successfully');
      }
      setIsBluetoothEnabled(!isBluetoothEnabled);
    } catch (error) {
      setStatusMessage('Bluetooth operation failed');
      console.error('Bluetooth Error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bluetooth Toggle</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Bluetooth:</Text>
        <Switch value={isBluetoothEnabled} onValueChange={toggleBluetooth} />
      </View>

      <Text style={styles.message}>{statusMessage}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginRight: 10,
  },
  message: {
    fontSize: 16,
    color: 'green',
    marginTop: 20,
  },
});
