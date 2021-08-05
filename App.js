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
	const [player, setPlayer] = useState('X');
	const [won, setWon] = useState(false);

	const boardItem = (row) => {
		return state[row].map((val, i, arr) => {
			return (
				<TouchableHighlight style={ styles.item } onPress={ () => onPress(row, i) } underlayColor={'#c6c6c6'} key={`${row},${i}`}>
					<Text style={[ styles.itemText, i === 1 && styles.itemMiddle ]}>{ val }</Text>
				</TouchableHighlight>
			);
		});
	}

	const onPress = (row, column) => {
		if (!state[row][column] && !won) {
			const newState = state;
			newState[row][column] = player;
			setState(newState);
			checkWin();
			console.log(won)
			changePlayer();
		}
	}

	const checkWin = () => {
		// Check for diagonal win
		if (((state[0][0] !== null || state[1][1] !== null || state[2][2] !== null) && 
			(state[0][0] === state[1][1] && state[1][1] === state[2][2])) || 
			((state[0][2] !== null || state[1][1] !== null || state[2][0] !== null) && 
			(state[0][2] === state[1][1] && state[1][1] === state[2][0]))) {
				console.log('diagonal win');
				setWon(true);
				return true;
		}

		// Check if row or column has won
		for (let i = 0; i < state.length; i++) {
			if (((state[i][0] !== null || state[i][1] !== null || state[i][2] !== null) && 
				(state[i][0] === state[i][1]) && (state[i][1] === state[i][2]))) {
					console.log('row win');
					setWon(true);
					return true;
			}

			if (((state[0][i] !== null || state[1][i] !== null || state[2][i] !== null) && 
				(state[0][i] === state[1][i]) && (state[1][i] === state[2][i]))) {
					console.log('column wins');
					setWon(true);
					return true;
			}
		}
		setWon(false);
		return false;
	}

	const reset = () => {
		setState([
			[null, null, null],
			[null, null, null],
			[null, null, null]
		]);
		setPlayer('X');
		setWon(false);
	}

	const changePlayer = () => setPlayer(player === 'X' ? 'O' : 'X');

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
			</View>
			<TouchableHighlight style={ styles.btn } onPress={ () => reset() } underlayColor={'#c6c6c6'}>
				<Text style={ styles.btnText }>New Game</Text>
			</TouchableHighlight>
			<StatusBar style="auto" />
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
	},
	btn: {
		padding: 10,
	},
	btnText: {
		fontSize: 32,
		textAlign: 'center',
	}
});

export default App;
