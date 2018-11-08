//import libraries

import React from 'react';
import { Text, View, Platform, StyleSheet } from 'react-native';

//make component
//obs -> props is a javascript variable called inside a jsx component
const Header = props => {
  const { textStyle, viewStyles } = styles;
  return (
    <View style={viewStyles}>
      <Text style={textStyle}> {props.headerText} </Text>
    </View>
  );
  ///
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
  viewStyles: {
    backgroundColor: '#F8F8F8',
    height: Platform.OS === 'ios' ? 80 : 60,
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    //android configs
    elevation: 3,
    position: 'relative'
  }
});

//make cp available to other parts parts of the app
export default Header;
