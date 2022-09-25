import React from "react";
import NoteCard from "../NoteCard/NoteCard";
import styles from "./styles.module.css";

function NoteList({ notes }) {
	return (
		<div className={styles.Container}>
			{notes.map((note, index) => (
				<NoteCard note={note} key={index} />
			))}
		</div>
	);
}

export default NoteList;
