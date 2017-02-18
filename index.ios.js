// index.ios.js - place code in here for IOS

// Import a library to help create a Component
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// Create a Component
class App extends Component {

  render() {
    return (
      <View>
        <Header headerText={'wau wau'} />
        <AlbumList />
      </View>
    );
  }
}


//  Render it to the device
AppRegistry.registerComponent('albums', () => App);
