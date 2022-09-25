import React from "react";
import styles from "./styles.module.css";

import { useDispatch } from "react-redux";
import { selectColor } from "./../../context/Notes/notesSlice";

function ColorButton({ color }) {
	const dispatch = useDispatch();
	const handleClick = () => {
		console.log(color);
		dispatch(selectColor(color));
	};
	return (
		<div className={styles.ColorButtonContainer}>
			<button style={{ backgroundColor: color }} onClick={handleClick}></button>
		</div>
	);
}

export default ColorButton;
