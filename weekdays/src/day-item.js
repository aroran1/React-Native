// Import some code we need
import React, { Component } from 'react';
import {
  Text
} from 'react-native'

// Create component
var DayItem = React.createClass({
  render: function(){
    return <Text style={this.style()}>
      {this.props.day}
    </Text>
  },
  style: function(){
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  },
  color: function() {
    const opacity = 1 / this.props.daysUntil;
    return 'rgba(0, 0, 0, ' + opacity + ')';
  },
  fontWeight: function(){
    const weight = 8 - this.props.daysUntil;
    return (weight * 100).toString();
  },
  fontSize: function(){
    return 60 - 6 * this.props.daysUntil;
  },
  lineHeight: function(){
    return 70 - 4 * this.props.daysUntil;
  }
});

// Make this code available elsewhere
module.exports = DayItem;
