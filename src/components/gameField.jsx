import React, { Component } from "react";
import GameButton from "./gameButton";

class GameField extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}
	render() {
		return (
			<div className="m-3" id="btns-container">
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
			</div>
		);
	}

	createButton(id) {
		return (
			<GameButton
				val={this.props.btns[id]}
				id={id}
				onClick={this.props.handleButton}
			/>
		);
	}
}

export default GameField;
