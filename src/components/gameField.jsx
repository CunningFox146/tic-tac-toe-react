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
	};
}

export default GameField;
