import React from "react";
import NoteCard from "../NoteCard/NoteCard";
import styles from "./styles.module.css";

import { useSelector } from "react-redux";

function NoteList() {
	let notes = useSelector((state) => state.notes.items);
	let filteredNotes = useSelector((state) => state.notes.filteredNotes);

	if (filteredNotes.length > 0) notes = filteredNotes;
	return (
		<div className={styles.Container}>
			{notes.map((note, index) => (
				<NoteCard note={note} key={index} />
			))}
		</div>
	);
}

export default NoteList;
