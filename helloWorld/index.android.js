// require dependencies
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

// require sub-components
// common code base coming from src/app,js for android and ios
import RouteComponent from './src/app.js';

AppRegistry.registerComponent('helloWorld', () => RouteComponent );


// Android build
// download Android studio - open/import android folder within helloWorld folder
// Android is bit slow to build
// require SDK Manager - SDK Tools, SDK Platform Tools, SDK Build Tools, Android 6 emulator and all extras
