import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import storage from '../store/index';

import Swiper from 'react-native-swiper';
// import {checkToken, refresh} from '../api/api';
import {Dialog} from 'beeshell';
import { scrollTo } from 'scroll-js'
export default class ScrollJs extends Component {
  constructor(p) {
    super(p);
    this.state = {
      activeIndex: 0,
    };
  }
  render() {
    scrollTo(document.body, {top: 300});
    return (
      <View style={{flex: 1}}>
        </View>
    );
  }
}

