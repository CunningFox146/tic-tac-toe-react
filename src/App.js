import React, { Component } from "react";
import GameField from "./components/gameField";
import Navbar from "./components/navbar";
import History from "./components/history";

class App extends Component {
	state = {
		btns: [],
		isX: true,
		winner: null,
		history: [],
	};

	render() {
		return (
			<React.Fragment>
				<Navbar resetGame={this.resetGame} winner={this.state.winner} />
				<GameField btns={this.state.btns} handleButton={this.handleButton} />
				<History history={this.state.history} onClick={this.loadMove} />
			</React.Fragment>
		);
	}

	resetGame = () => {
		this.setState({ winner: null, btns: [], isX: true, history: [] });
	};

	handleButton = (id) => {
		if (this.state.btns[id] || this.state.winner) return;
		let btns = [...this.state.btns];
		const isX = this.state.isX;
		const val = isX ? "X" : "O";
		btns[id] = val;

		const winner = this.calculateWinner(btns);

		this.setState({ btns, winner, isX: !isX });
		this.saveMove(id, val);
	};

	saveMove(id, val) {
		const history = [...this.state.history];
		history.push({ id, val });
		this.setState({ history });
	}

	loadMove = (idx) => {
		console.log("Rollback to", idx);
		const btns = [...this.state.btns];
		const rollback = this.state.history.slice(idx);
		rollback.forEach((item) => {
			delete btns[item.id];
		});

		this.setState({
			btns,
			history: this.state.history.slice(0, idx),
			winner: this.calculateWinner(btns),
		});
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
