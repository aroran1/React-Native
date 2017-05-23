// require dependencies
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

// require sub-components
// common code base coming from src/app,js for android and ios
import RouteComponent from './src/app.js';

AppRegistry.registerComponent('helloWorld', () => RouteComponent );
