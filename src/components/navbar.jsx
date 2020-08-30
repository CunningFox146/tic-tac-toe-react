import React from "react";

function renderWinner(winner) {
	if (!winner) return null;
	return (
		<span className="navbar-brand">
			Winner:
			<span className="badge badge-success">{winner}</span>
		</span>
	);
}

const Navbar = ({ resetGame, winner }) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="btn-group nav-item" role="group" aria-label="Basic example">
				<button type="button" className="btn btn-danger" onClick={resetGame}>
					Restart
				</button>
				<button type="button" className="btn btn-warning">
					Undo
				</button>
			</div>
			{renderWinner(winner)}
		</nav>
	);
};

export default Navbar;
