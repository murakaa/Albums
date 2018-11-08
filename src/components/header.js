//import libraries

import React from 'react';
import { Text, View } from 'react-native';

//make component

const Header = () => {
  const { textStyle, viewStyles } = styles;
  return (
    <View style={viewStyles}>
      <Text style={textStyle}> Albuns! </Text>
    </View>
  );
  ///
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyles: {
    backgroundColor: '#F8F8F8',
    height: 90,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  }
};

//make cp available to other parts parts of the app
export default Header;
