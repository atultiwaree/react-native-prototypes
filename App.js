import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  PermissionsAndroid,
} from 'react-native';
import React from 'react';

export default function App({navigation}) {
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => navigation.navigate('PathReader')}>
        <Text style={styles.routeStyle}>Path Reader</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ReadDir')}>
        <Text style={styles.routeStyle}>Directory Reader</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('mkdir')}>
        <Text style={styles.routeStyle}>Make Directory</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('writefile')}>
        <Text style={styles.routeStyle}>WriteFile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('imageReducer')}>
        <Text style={styles.routeStyle}>ImageReducer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('parivartan')}>
        <Text style={styles.routeStyle}>Parivartan</Text>
      </TouchableOpacity>
      <Button title="permission" onPress={requestCameraPermission} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  routeStyle: {
    fontSize: 20,
    color: 'darkblue',
  },
});
