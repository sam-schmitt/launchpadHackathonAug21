import React, { useEffect, useState } from "react";
import Todo from "../components/todo";
import { Button, TextField } from "@material-ui/core";
import { useHistory } from "react-router";
import AddIcon from "@material-ui/icons/Add";
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
		<div className="container">
			<h1>Todo List</h1>

			<div className="add-todo-container">
				<TextField
					label={"Add a todo"}
					onChange={(e) => {
						setTodo(e.target.value);
					}}
					value={todo}
					variant={"filled"}
					multiline={true}
					className="text-input"
					style={{ flex: 1 }}
				/>
				<div className="button-wrapper">
					<Button
						variant="contained"
						color="primary"
						// className={classes.button}
						startIcon={<AddIcon />}
						className="button"
						onClick={() => {
							addItem();
						}}
					>
						<p>add</p>
					</Button>
				</div>
			</div>
			<div className="todo-container">
				<div className="alignCenter">
					{items.length !== 0 && (
						<div>
							{items
								.filter((item) => item._id)
								.map(function (d, idx) {
									return (
										<li key={idx} className="no-bullet">
											<Todo
												text={d.item}
												handleClick={() => completeItem(d._id)}
											/>
										</li>
									);
								})}
						</div>
					)}
					{!items.length && (
						<div>
							<p className="text-center">No Todo's</p>
						</div>
					)}
				</div>
			</div>

			<Button
				className="button"
				variant="contained"
				color="default"
				onClick={() => {
					history.push("/finished");
				}}
				style={{ flex: 1 }}
			>
				<p>Done Items</p>
			</Button>
		</div>
	);
}
