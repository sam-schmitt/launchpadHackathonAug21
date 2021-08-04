import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Todo from "../components/todo";
import TextField from "@material-ui/core/TextField";

export default function TodoScreen() {
	const [todo, setTodo] = useState("");
	return (
		<div className="container">
			<h1>Todo List</h1>

			<div className="text-input-container">
				<TextField
					label={"Add a todo"}
					onChange={(e) => setTodo(e.target.todo)}
					value={todo}
					variant={"filled"}
					inputProps={{ className: "todo-input" }}
				/>
			</div>
			<div className="todo-container">
				<Todo text={"hello"} handleClick={() => console.log("hello")} />
			</div>

			<button component={Link} to="/finished" className="center">
				Go To info screen
			</button>
		</div>
	);
}
