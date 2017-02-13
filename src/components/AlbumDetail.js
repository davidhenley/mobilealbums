import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({album}) => {
  const { title, artist, thumbnail_image, image } = album;
  const { thumbnailStyle, headerText, thumbnailContainer, textContainer, albumStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={textContainer}>
          <Text style={headerText}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style={albumStyle} source={{ uri: image }} />
      </CardSection>
    </Card>
  );
};

const styles = {
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerText: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  albumStyle: {
    height: 300,
    flex: 1
  }
}

export default AlbumDetail;
