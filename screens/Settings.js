import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class SettingsScreen extends Component {
	static navigationOptions = {
		title: 'Setting',
	};

	render() {
		return (
			<View>
				<Text>Setting</Text>
			</View>
		);
	}
}
