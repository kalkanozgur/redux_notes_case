import React, { useState } from "react";
import styles from "./styles.module.css";

import { useDispatch } from "react-redux";
import { filterNote } from "./../../context/Notes/notesSlice";

function FilterField() {
	const dispatch = useDispatch();
	const [text, setText] = useState("");

	const handleSubmit = (e) => {
		if (!text) return;
		e.preventDefault();
		// dispatch(filterNote(text));
	};

	const handleChange = (e) => {
		setText(e.target.value);
		dispatch(filterNote(e.target.value));
	};

	return (
		<div className={styles.Filter}>
			<form htmlFor={"Filter"} onSubmit={handleSubmit}>
				<input
					type="text"
					name="FilterNotes"
					id="filterNotes"
					placeholder={"Search..."}
					value={text}
					onChange={handleChange}
				/>
			</form>
		</div>
	);
}

export default FilterField;
