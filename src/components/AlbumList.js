import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

//class based components
//lifecycle methods
export class AlbumList extends Component {
  static propTypes = {};

  componentWillMount() {
    //will be called authomatically before the view is mounted
    console.log('componentWillMount in Almbullist');
    // debugger; //this is like a breakpoint

    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(
      //this is a promisse, asynch
      response => console.log(response)
    );
  }

  render() {
    return (
      <View>
        <Text> AlbumList !!! </Text>
      </View>
    );
  }
}

export default AlbumList;
