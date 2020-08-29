import React, { Component } from "react";
import GameField from "./components/gameField";
import Navbar from "./components/navbar";

class App extends Component {
	state = {
		btns: [],
		isX: true,
		winner: null,
	};

	render() {
		this.field = (
			<GameField btns={this.state.btns} handleButton={this.handleButton} />
		);
		return (
			<React.Fragment>
				<Navbar resetGame={this.resetGame} winner={this.state.winner} />
				{this.field}
			</React.Fragment>
		);
	}

	resetGame = () => {
		this.setState({ winner: null, btns: [], isX: true });
	};

	handleButton = (id) => {
		if (this.state.btns[id] || this.state.winner) return;
		let btns = [...this.state.btns];
		const isX = this.state.isX;
		btns[id] = isX ? "X" : "O";

		const winner = this.calculateWinner(btns);

		this.setState({ btns, winner, isX: !isX });
	};

	calculateWinner(squares) {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];

		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
				return squares[a];
			}
		}

		let num = 0;
		squares.forEach((element) => {
			if (element) {
				num++;
			}
		});
		if (num === 9) return "Draw";

		return null;
	}
}

export default App;
