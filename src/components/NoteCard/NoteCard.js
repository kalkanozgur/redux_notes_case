import React from "react";
import styles from "./styles.module.css";

function NoteCard({ note }) {
	return (
		<div
			className={styles.Container}
			style={{ backgroundColor: note.color }}
			onClick={() => {
				alert("Are you sure?");
			}}
		>
			<h3>{note.title}</h3>
		</div>
	);
}

export default NoteCard;
