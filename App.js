import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
	return (
		<SafeAreaProvider style={ styles.container }>
			<SafeAreaView style={ styles.header }>
				<Text style={ styles.title }>Tic Tac Toe</Text>
			</SafeAreaView>
			<View style={ styles.board }>
				<View style={[ styles.row, styles.rowBottom ]}>
					<Text style={ styles.item }>X</Text>
					<Text style={[ styles.item, styles.itemMiddle ]}>X</Text>
					<Text style={ styles.item }>O</Text>
				</View>
				<View style={[ styles.row, styles.rowBottom ]}>
					<Text style={ styles.item }>O</Text>
					<Text style={[ styles.item, styles.itemMiddle ]}>O</Text>
					<Text style={ styles.item }>X</Text>
				</View>
				<View style={ styles.row }>
					<Text style={ styles.item }>X</Text>
					<Text style={[ styles.item, styles.itemMiddle ]}>O</Text>
					<Text style={ styles.item }>X</Text>
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
		textAlign: 'center',
		fontSize: 52,
		padding: 10,
		backgroundColor: '#eeeeee',
	},
	itemMiddle: {
		borderLeftWidth: 5,
		borderRightWidth: 5,
	}
});

export default App;
