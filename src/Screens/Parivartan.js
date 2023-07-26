import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RNFS from 'react-native-fs';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Parivartan = () => {
  const [source, setSource] = useState(null);
  async function openCamera() {
    console.log('Camera opern');
    const x = await launchImageLibrary({
      mediaType: 'photo',
      quality: 0.1,
      includeBase64: true,
    });
    // console.log(x.assets[0].uri);
    // setSource(x.assets[0].uri);
    const imageData = x.assets[0].base64;
    const imagePath = `${RNFS.DownloadDirectoryPath}image.jpg`;

    RNFS.writeFile(imagePath, imageData, 'base64').then(() =>
      console.log('Image converted to jpg and saved at ' + imagePath),
    );

    // console.log(x);
  }

  return (
    <View>
      <Button title="Select image" onPress={openCamera} />
    </View>
  );
};

export default Parivartan;

const styles = StyleSheet.create({});
