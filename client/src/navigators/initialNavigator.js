import React from "react";
import { Switch, Route } from "react-router-dom";
import TodoScreen from "../screens/todoScreen";
import FinishedScreen from "../screens/finishedScreen";
import Header from "../components/header";
export default function InitialRouter() {
	return (
		<div>
			<Header />
			<div className="app-container">
				<Switch>
					<Route path="/finished">
						<FinishedScreen />
					</Route>
					<Route path="/">
						<TodoScreen />
					</Route>
				</Switch>
			</div>
		</div>
	);
}
