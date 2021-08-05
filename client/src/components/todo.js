import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckIcon from "@material-ui/icons/Check";
import { IconButton } from "../components/buttons";

export default function Todo({ text, handleClick, deleteClick }) {
	return (
		<div className="todo">
			<p>{text}</p>
			{handleClick && (
				<IconButton
					text={"Done"}
					variant={"outlined"}
					onClick={handleClick}
					color={"primary"}
					icon={<CheckIcon />}
				/>
			)}
			{deleteClick && (
				<IconButton
					text={"Delete"}
					variant={"outlined"}
					onClick={deleteClick}
					color={"secondary"}
					icon={<DeleteIcon />}
				/>
			)}
		</div>
	);
}

{
	/* <Button
					variant="outlined"
					color="primary"
					// className={classes.button}
					startIcon={<CheckIcon />}
					onClick={handleClick}
				>
					Done
				</Button> */
}
