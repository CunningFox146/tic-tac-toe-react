import React from "react";

const History = ({ history, onClick }) => {
	return (
		<React.Fragment>
			{history.map((c, idx) => (
				<button key={c.id} onClick={() => onClick(idx)}>
					Return to move #{(idx + 1).toString()} ({c.val})
				</button>
			))}
		</React.Fragment>
	);
};

export default History;
