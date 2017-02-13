import React from 'react';
import { View } from 'react-native';

import Header from './components/Header';
import AlbumList from './components/AlbumList';

const App = () => {
  return (
    <View>
      <Header title={'Albums'} />
      <AlbumList />
    </View>
  );
}

export default App;
