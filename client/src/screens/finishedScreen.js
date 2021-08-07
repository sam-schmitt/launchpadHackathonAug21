import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import todoApi from "../api/todo";
import Todo from "../components/todo";
import Button from "@material-ui/core/Button";

export default function FinishedScreen() {
	const history = useHistory();
	const [items, setItems] = useState([]);
	const getDone = async () => {
		const result = await todoApi.getDone();
		if (!result.ok) {
			console.log("getItemErr");
		} else {
			setItems(result.data);
		}
	};
	const deleteItem = async (itemID) => {
		const result = await todoApi.deleteItem(itemID);
		if (!result.ok) {
			console.log("addItemErr");
		} else {
			getDone();
		}
	};
	useEffect(() => {
		getDone();
	}, []);
	return (
		<div className="container">
			<h1>Finished Items</h1>

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
												deleteClick={() => deleteItem(d._id)}
											/>
										</li>
									);
								})}
						</div>
					)}
					{items.length === 0 && (
						<div>
							<p className="text-center">No Finished Todo's</p>
						</div>
					)}
				</div>
			</div>
			<button>test</button>
			<Button
				className="button"
				variant="contained"
				color="default"
				onClick={() => {
					history.push("/");
				}}
				style={{ flex: 1 }}
			>
				<p>Todo Items</p>
			</Button>
		</div>
	);
}
