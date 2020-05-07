import 'react-native-get-random-values';
import React from 'react';
import {
  StyleSheet, 
  SafeAreaView
} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  MyWebView,
  GuideScreen,
} from './src/index';
import storage from './src/store/index';
import {checkToken} from './src/api/api';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  constructor(p) {
    super(p);
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
            <NavigationContainer>
            <Stack.Navigator initialRouteName="Guide">
              <Stack.Screen
                name="Guide"
                component={GuideScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="WebView"
                component={MyWebView}
                options={MyWebView.navigationOptions}
              />
            </Stack.Navigator>
          </NavigationContainer>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  tabBarIcon: {
    height: 25,
    width: 25,
  },
  safeArea: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)'
  }
});
