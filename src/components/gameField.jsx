import React, { Component } from "react";
import GameButton from "./gameButton";

class GameField extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				<GameButton />
				<GameButton />
				<GameButton />
				<br />
				<GameButton />
				<GameButton />
				<GameButton />
				<br />
				<GameButton />
				<GameButton />
				<GameButton />
			</React.Fragment>
		);
	}
}

export default GameField;
