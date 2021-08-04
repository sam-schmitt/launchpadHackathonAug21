import React from "react";
import logo from "../assets/img/logo.png";
export default function Header() {
	return (
		<div className='header'>
			<img src={logo} alt={"logo"} />
		</div>
	);
}
