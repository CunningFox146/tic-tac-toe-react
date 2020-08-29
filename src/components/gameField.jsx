import React, { Component } from "react";
import GameButton from "./gameButton";

class GameField extends Component {
	constructor(props) {
		super(props);
		this.state = {
			btns: [],
			isX: true,
		};
	}
	render() {
		return (
			<React.Fragment>
				<div id="row-1">
					{this.createButton(0)}
					{this.createButton(1)}
					{this.createButton(2)}
				</div>
				<div id="row-2">
					{this.createButton(3)}
					{this.createButton(4)}
					{this.createButton(5)}
				</div>
				<div id="row-3">
					{this.createButton(6)}
					{this.createButton(7)}
					{this.createButton(8)}
				</div>
			</React.Fragment>
		);
	}

	createButton(id) {
		return (
			<GameButton val={this.state.btns[id]} id={id} onClick={this.handleButton} />
		);
	}

	handleButton = (id) => {
		if (this.state.btns[id]) return;
		let btns = [...this.state.btns];
		let isX = this.state.isX;
		btns[id] = isX ? "X" : "O";
		this.setState({ btns, isX: !isX });

		console.log("calculateWinner", this.calculateWinner(btns));
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
		return null;
	}
}

export default GameField;
