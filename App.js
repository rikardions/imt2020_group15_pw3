import React from 'react';
import { createStackNavigator } from 'react-navigation'; 


import homescreen from './screens/homescreen'
import detailscreen from './screens/detailscreen'
import countscreens from './screens/countscreens'



export default createStackNavigator({
  Home: {
    screen: homescreen,
  },
  Detail: {
    screen: detailscreen,
  },
  Count: {
    screen: countscreens,
  },
});