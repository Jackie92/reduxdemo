/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import demoApp from './reducers';
import BaseApp from './BaseApp';

const store = createStore(demoApp)


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BaseApp />
      </Provider>
    );
  }
}
