import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import { green, red } from "@material-ui/core/colors";
function IconButton({ text, color, variant, onClick, icon }) {
	const CustomIconButton = withStyles((theme) => ({
		root: {
			color:
				color === "primary"
					? theme.palette.getContrastText(green[100])
					: theme.palette.getContrastText(red[100]),
			backgroundColor: color === "primary" ? green[100] : red[100],
			borderColor: color === "primary" ? green[700] : red[700],
			"&:hover": {
				backgroundColor: color === "primary" ? green[600] : red[400],
				borderColor: color === "primary" ? green[700] : red[700],
				color:
					color === "primary"
						? theme.palette.getContrastText(green[600])
						: theme.palette.getContrastText(red[400]),
			},
		},
	}))(Button);
	return (
		<CustomIconButton
			variant={variant}
			onClick={onClick}
			color={color}
			startIcon={icon}
		>
			{text}
		</CustomIconButton>
	);
}
export { IconButton };
