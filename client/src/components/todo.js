import React from "react";

export default function Todo({ text, handleClick, deleteClick }) {
	return (
		<div className='todo'>
			<p>{text}</p>
			{handleClick && <button onClick={handleClick}>Done</button>}
			{deleteClick && <button onClick={deleteClick}>Delete</button>}
		</div>
	);
}
