import React from "react";
import logo from "../assets/img/logo.png";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
import { withStyles } from "@material-ui/core/styles";
import { brown, green, red } from "@material-ui/core/colors";

export default function Header() {
	const history = useHistory();
	const HeaderButton = withStyles(() => ({
		root: {
			color: "#fff",
			backgroundColor: brown[900],
			marginLeft: 3,
			marginRight: 3,
			height: "100%",
			flex: 0.25,
			"&:hover": {
				backgroundColor: brown[600],
				color: "#fff",
			},
		},
	}))(Button);
	return (
		<div className="header">
			<img src={logo} alt={"logo"} className="header-logo" />
			<HeaderButton
				color="white"
				onClick={() => {
					history.push("/");
				}}
			>
				<p className="headerButton">Todo Items</p>
			</HeaderButton>
			<HeaderButton
				color="white"
				onClick={() => {
					history.push("/finished");
				}}
			>
				<p className="headerButton">Finished Items</p>
			</HeaderButton>
		</div>
	);
}
