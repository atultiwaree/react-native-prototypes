import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import RNFS from 'react-native-fs';
const PathReader = () => {
  const [downloadsFolder, setDownloadsFolder] = React.useState('');
  const [documentFolder, setDocumntFolder] = React.useState('');

  React.useEffect(() => {
    setDownloadsFolder(RNFS.DownloadDirectoryPath);
    setDocumntFolder(RNFS.DownloadDirectoryPath);
  }, []);

  return (
    <SafeAreaView>
      <Text> Downloads Folder: {downloadsFolder}</Text>
      <Text>Document Folder : {documentFolder}</Text>
    </SafeAreaView>
  );
};

export default PathReader;

const styles = StyleSheet.create({});
