import React from "react";

export default function Todo({ text, handleClick }) {
	return (
		<div className="todo">
			<p>{text}</p>
			<button onClick={handleClick}>Done</button>
		</div>
	);
}
