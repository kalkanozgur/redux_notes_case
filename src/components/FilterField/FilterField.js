import React, { useState } from "react";
import styles from "./styles.module.css";

function FilterField() {
	const [text, setText] = useState("");
	const handleChange = (e) => setText(e.target.value);
	return (
		<div className={styles.Filter}>
			<form htmlFor={"Filter"}>
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
