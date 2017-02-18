import React from 'react';
import { Text, Image } from 'react-native';
import Card from './Card';


const AlbumDetail = (props) => (
  <Card>
    <Text>{props.album.title}</Text>
    <Image
      source={{ uri: props.album.image }}
      style={{ width: 40, height: 40 }}
    />
  </Card>
);


export default AlbumDetail;
