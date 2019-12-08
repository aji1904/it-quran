import React, { Component } from 'react';
import App from './Frontend/'
import { enableScreens } from 'react-native-screens';
import 'react-native-gesture-handler'
import { Root } from "native-base";

enableScreens();

export default class Aplikasi extends Component {
  render() {
    return (
      <Root>
        <App />
      </Root>
    )
  };
}
