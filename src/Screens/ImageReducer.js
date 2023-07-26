import {StyleSheet, Text, View, Button, Image} from 'react-native';
import React, {useState} from 'react';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import RNFS from 'react-native-fs';

const ImageReducer = () => {
  const [source, setSource] = useState(null);
  async function openCamera() {
    console.log('Camera opern');
    const x = await launchImageLibrary({mediaType: 'photo', quality: 0.5});
    console.log(x.assets[0].uri);
    setSource(x.assets[0].uri);
  }

  async function save() {
    console.log('lauda leo');
    let x = RNFS.DownloadDirectoryPath;

    // COPY the file
    RNFS.copyFile(source, `${x}/${Math.random() * 10000}.jpg`)
      .then(success => {
        console.log('IMG COPIED!');
        console.log(newPath);
      })
      .catch(err => {
        console.log(err.message);
      });

    console.log(x);
  }

  return (
    <View>
      <Button title="press" onPress={openCamera} />
      {source ? (
        <Image source={{uri: source}} height={500} width={360} />
      ) : (
        <Text>No Image</Text>
      )}
      <Button title="Save photo" onPress={save} />
    </View>
  );
};

export default ImageReducer;

const styles = StyleSheet.create({});
