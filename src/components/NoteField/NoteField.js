import React from "react";
import Button from "../Button/Button";
import ColorButton from "../Button/ColorButton";
import styles from "./styles.module.css";

function NoteField() {
	return (
		<>
			<form className={styles.Container}>
				<textarea placeholder="Enter your note here.." />
				<div className={styles.ButtonGroup}>
					<div className={styles.ColorButtons}>
						<ColorButton color={"purple"} />
						<ColorButton color={"red"} />
						<ColorButton color={"yellow"} />
					</div>
					<Button>Add</Button>
				</div>
			</form>
		</>
	);
}

export default NoteField;
