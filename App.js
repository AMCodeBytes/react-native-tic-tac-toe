import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {

	const [state, setState] = useState([
		[null, null, null],
		[null, null, null],
		[null, null, null]
	]);

	const boardItem = (row) => {
		return state[row].map((val, i, arr) => {
			return (
				<TouchableHighlight style={ styles.item } onPress={ () => onPress() } underlayColor={'#c6c6c6'} key={`${row},${i}`}>
					<Text style={[ styles.itemText, i === 1 && styles.itemMiddle ]}>{ val }</Text>
				</TouchableHighlight>
			);
		});
	}

	const onPress = (row, column) => {

	}

	return (
		<SafeAreaProvider style={ styles.container }>
			<SafeAreaView style={ styles.header }>
				<Text style={ styles.title }>Tic Tac Toe</Text>
			</SafeAreaView>
			<View style={ styles.board }>
				<View style={[ styles.row, styles.rowBottom ]}>
					{ boardItem(0) }
				</View>
				<View style={[ styles.row, styles.rowBottom ]}>
					{ boardItem(1) }
				</View>
				<View style={ styles.row }>
					{ boardItem(2) }
				</View>
				<StatusBar style="auto" />
			</View>
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	header: {
		alignItems: 'center',
		flexDirection: 'column',
		paddingBottom: 20,
	},
	title: {
		fontSize: 32,
		paddingBottom: 50,
	},
	board: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	rowBottom: {
		borderBottomWidth: 5,
	},
	item: {
		flex: 1,
	},
	itemText: {
		textAlign: 'center',
		fontSize: 52,
		padding: 10,
	},
	itemMiddle: {
		borderLeftWidth: 5,
		borderRightWidth: 5,
	}
});

export default App;
