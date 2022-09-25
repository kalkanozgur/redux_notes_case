import "./App.css";

import Header from "./components/Header";
import FilterField from "./components/FilterField";
import NoteField from "./components/NoteField";
import NoteList from "./components/NoteList";
import Footer from "./components/Footer";

function App() {
	const notes = [
		{
			title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			color: "#585858",
		},
		{
			title: "exa ipsum dolor sit amet consectetur adipisicing elit.",
			color: "#581258",
		},
		{
			title: "sad ipsum dolor sit amet consectetur adipisicing elit.",
			color: "#587358",
		},
		{
			title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			color: "#135858",
		},
		{
			title: "exa ipsum dolor sit amet consectetur adipisicing elit.",
			color: "#581266",
		},
		{
			title:
				"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam tenetur sit fugit laudantium alias eveniet reiciendis maxime quisquam.",
			color: "#183458",
		},
	];
	return (
		<div className="App">
			<Header />
			<FilterField />
			<NoteField />
			<NoteList notes={notes} />
			<Footer />
		</div>
	);
}

export default App;
