import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import RNFS from 'react-native-fs';

const MakeDir = () => {
  const folderPath = RNFS.DocumentDirectoryPath + '/tiwaree';

  const makeDirectory = async folderPath => {
    await RNFS.mkdir(folderPath); //create a new folder on folderPath
  };

  useEffect(() => {
    makeDirectory(folderPath); //execute this function on first mount
  }, []);

  return <Text>hello</Text>;
};

//React native run-android works fine.

export default MakeDir;
const styles = StyleSheet.create({});
