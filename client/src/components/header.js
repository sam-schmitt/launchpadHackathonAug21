import React from "react";
import logo from "../assets/img/logo.png";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";

export default function Header() {
	const history = useHistory();

	return (
		<div className='header'>
			<img src={logo} alt={"logo"} />
			<Button
				color='white'
				onClick={() => {
					history.push("/finished");
				}}
				style={{ flex: 1 }}
			>
				<p className='headerButton'>Finished Items</p>
			</Button>
			<Button
				className='headerButton'
				color='white'
				onClick={() => {
					history.push("/");
				}}
				style={{ flex: 1 }}
			>
				<p className='headerButton'>Todo Items</p>
			</Button>
		</div>
	);
}
