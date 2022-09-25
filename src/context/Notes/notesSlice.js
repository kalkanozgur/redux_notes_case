import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
	name: "notes",
	initialState: {
		items: [
			{
				id: "1",
				title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
				color: "#585858",
			},
			{
				id: "2",
				title: "exa ipsum dolor sit amet consectetur adipisicing elit.",
				color: "#581258",
			},
			{
				id: "3",
				title: "sad ipsum dolor sit amet consectetur adipisicing elit.",
				color: "#587358",
			},
			{
				id: "4",
				title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
				color: "#135858",
			},
			{
				id: "5",
				title: "exa ipsum dolor sit amet consectetur adipisicing elit.",
				color: "#581266",
			},
			{
				id: "6",
				title:
					"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam tenetur sit fugit laudantium alias eveniet reiciendis maxime quisquam.",
				color: "#183458",
			},
		],
		filteredNotes: [],
		selectedColor: "red",
	},
	reducers: {
		addNote: {
			reducer: (state, action) => {
				state.items.push(action.payload);
			},
			prepare: ({ title, color }) => {
				console.log({ title, color });
				return {
					payload: {
						id: nanoid(),
						title: title,
						color: color,
					},
				};
			},
		},
		deleteNote: (state, action) => {
			const id = action.payload;
			const filtered = state.items.filter((item) => item.id !== id);
			state.items = filtered;
		},
		filterNote: (state, action) => {
			const filteredNotes = state.items.filter((item) =>
				item.title
					.toLocaleLowerCase()
					.includes(action.payload.toLocaleLowerCase())
			);
			return {
				...state,
				filteredNotes: filteredNotes,
			};
		},
		selectColor: (state, action) => {
			// console.log(action.payload);
			state.selectedColor = action.payload;
		},
	},
});

export const { addNote, deleteNote, selectColor, filterNote } =
	notesSlice.actions;

export default notesSlice.reducer;
