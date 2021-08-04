import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import todoApi from "../api/todo";
import Todo from "../components/todo";

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
		<div className='container'>
			<h1>Finished Items</h1>

			<div className='todo-container'>
				<div className='alignCenter'>
					{items
						.filter((item) => item._id)
						.map(function (d, idx) {
							return (
								<li key={idx} className='noBullet'>
									<Todo text={d.item} deleteClick={() => deleteItem(d._id)} />
								</li>
							);
						})}
				</div>
			</div>

			<button
				onClick={() => {
					history.push("/");
				}}
			>
				<p>Items</p>
			</button>
		</div>
	);
}
