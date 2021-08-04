import React, { useEffect, useState } from "react";
import Todo from "../components/todo";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router";

import todoApi from "../api/todo";

export default function TodoScreen() {
	const [todo, setTodo] = useState("");
	const [items, setItems] = useState([]);
	const history = useHistory();

	const getNotDone = async () => {
		const result = await todoApi.getNotDone();
		if (!result.ok) {
			console.log("getItemErr");
		} else {
			setItems(result.data);
		}
	};
	const addItem = async () => {
		const result = await todoApi.post(todo);
		if (!result.ok) {
			console.log("addItemErr");
		} else {
			setTodo("");
			getNotDone();
		}
	};
	const completeItem = async (itemID) => {
		const result = await todoApi.completeItem(itemID);
		if (!result.ok) {
			console.log("addItemErr");
		} else {
			getNotDone();
		}
	};
	useEffect(() => {
		getNotDone();
	}, []);
	return (
		<div className='container'>
			<h1>Todo List</h1>

			<div className='text-input-container'>
				<TextField
					label={"Add a todo"}
					onChange={(e) => {
						setTodo(e.target.value);
					}}
					value={todo}
					variant={"filled"}
					inputProps={{ className: "todo-input" }}
				/>
				<button
					onClick={() => {
						addItem();
					}}
				>
					<p>add</p>
				</button>
			</div>
			<div className='todo-container'>
				<div className='alignCenter'>
					{items
						.filter((item) => item._id)
						.map(function (d, idx) {
							return (
								<li key={idx} className='noBullet'>
									<Todo text={d.item} handleClick={() => completeItem(d._id)} />
								</li>
							);
						})}
				</div>
			</div>

			<button
				onClick={() => {
					history.push("/finished");
				}}
			>
				<p>Done Items</p>
			</button>
		</div>
	);
}
