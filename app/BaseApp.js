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
import { changeName } from "./actions/user";
import Show from "./Show"

class BaseConnectApp extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { name, onChangeClick } = this.props;
    return (
      <View >
        <Text>
          Welcome to React Native!{name}
        </Text>
        <Button title='更换性别' onPress={onChangeClick}/>
        <Show />
      </View>
    );
  }
}

function select(store){
  return {
    name: store.user.name
  }
}

const mapStateToProps = (state) => {
	return {
		name: state.user.name
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChangeClick: () => {
      Alert.alert('jasper')
			dispatch(changeName('jasper'))
		}
	}
}

const BaseApp = connect(
	mapStateToProps,
	mapDispatchToProps
)(BaseConnectApp)
export default BaseApp