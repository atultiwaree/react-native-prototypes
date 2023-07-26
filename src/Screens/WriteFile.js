import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import RNFS from 'react-native-fs';

const WriteFile = () => {
  const filePath = RNFS.DocumentDirectoryPath + '/joke.txt'; //absolute path of our file
  const fileContent = "Why do programmers wear glasses? \n They can't C#!";

  const makeFile = async (filePath, content) => {
    try {
      //create a file at filePath. Write the content data to it
      await RNFS.writeFile(filePath, content, 'utf8');
      console.log('written to file');
    } catch (error) {
      //if the function throws an error, log it out.
      console.log(error);
    }
  };
  //extra code removed for brevity..
  useEffect(() => {
    makeFile(filePath, fileContent);
  }, []);

  return (
    <View>
      <Text>WriteFile</Text>
    </View>
  );
};

export default WriteFile;

const styles = StyleSheet.create({});
