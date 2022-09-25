import React, { useState } from "react";
import Button from "../Button/Button";
import ColorButton from "../Button/ColorButton";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "./../../context/Notes/notesSlice";

function NoteField() {
	const color = useSelector((state) => state.notes.selectedColor);
	const dispatch = useDispatch();
	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!text || text.length < 1) {
			return;
		}
		dispatch(addNote({ title: text, color }));
		setText("");
	};
	return (
		<>
			<div className={styles.Container}>
				<textarea
					placeholder="Enter your note here.."
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<form className={styles.ButtonGroup} onSubmit={handleSubmit}>
					<div className={styles.ColorButtons}>
						<ColorButton color={"purple"} />
						<ColorButton color={"red"} />
						<ColorButton color={"yellow"} />
					</div>
					<Button>Add</Button>
				</form>
			</div>
		</>
	);
}

export default NoteField;
