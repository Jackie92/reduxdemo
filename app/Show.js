/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
  Button
} from 'react-native';
import { connect } from 'react-redux';


class ConnectShow extends Component {
  constructor(props){
    super(props);
    if(props.name){
      Alert.alert(props.name)
    }
  }
  render() {
    const { name } = this.props;
    return (
      <View >
        <Text>
          {name}
        </Text>
      </View>
    );
  }
}


const mapStateToProps = (state) => {
	return {
		name: state.user.name
	}
}


const Show = connect(
	mapStateToProps
)(ConnectShow)
export default Show