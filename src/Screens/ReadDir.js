import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import RNFS from 'react-native-fs';

const ReadDir = () => {
  const [files, setFiles] = React.useState([]);

  React.useEffect(() => {
    async function getFileContent(path) {
      const reader = await RNFS.readDir(path);
      setFiles(reader);
    }

    getFileContent(RNFS.DocumentDirectoryPath);
    console.log(files);
  }, []);

  const Item = ({name, isFile}) => {
    return (
      <View>
        <Text style={styles.name}>Name: {name}</Text>
        <Text> {isFile ? 'It is a file' : "It's a folder"}</Text>
      </View>
    );
  };
  const renderItem = ({item, index}) => {
    return (
      <View>
        <Text style={styles.title}>{index}</Text>
        {/* The isFile method indicates whether the scanned content is a file or a folder*/}
        <Item name={item.name} isFile={item.isFile()} />
      </View>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        data={files}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </SafeAreaView>
  );
};

export default ReadDir;

const styles = StyleSheet.create({});
