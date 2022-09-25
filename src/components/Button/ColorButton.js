import React from "react";
import styles from "./styles.module.css";

function ColorButton({ color }) {
	return (
		<div className={styles.ColorButtonContainer}>
			<button style={{ backgroundColor: color }}></button>
		</div>
	);
}

export default ColorButton;
