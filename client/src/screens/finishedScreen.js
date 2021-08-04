import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
export default function FinishedScreen() {
	return (
		<div>
			Info
			<button component={Link} to="/">
				back to todo
			</button>
		</div>
	);
}
