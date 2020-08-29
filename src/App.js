import React, { Component } from "react";
import GameField from "./components/gameField";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return <GameField />;
	}
}

export default App;
