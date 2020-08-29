import React from "react";
import "../gameButton.css";

const GameButton = ({ val, id, onClick }) => {
	return (
		<button className="game-button btn btn-dark m-1" onClick={() => onClick(id)}>
			{val && val}
		</button>
	);
};

export default GameButton;
