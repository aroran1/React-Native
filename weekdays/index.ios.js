// Import some code we need
// var React       = require('react-native'),
//     AppRegistry = React.AppRegistry,
//     View        = React.View,
//     Text        = React.Text;

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  StyleSheet
} from 'react-native';
import Moment from 'moment';
import DayItem from './src/day-item'; // Or use var DayItem = require('./src/day-item');

// const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Create react Component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      {this.days()}
    </View>
  },
  days: function() {
    // return Days.map(function(day){
    //   return <DayItem day={day} />
    // });

    var daysItem = [];

    for(var i = 0; i < 7; i++){
      var day = Moment().add(i, 'days').format('dddd');
      daysItem.push(
        <DayItem day={day} daysUntil={i} key={i} />
      );
    }
     return daysItem;
  }
});

// Style the react component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // moves stuff height wise
    alignItems: 'center' // moves stuff width wise
  }
});

// Show the react component on screen
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays
});
