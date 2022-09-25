import Header from "./components/Header";
import FilterField from "./components/FilterField";
import NoteField from "./components/NoteField";
import NoteList from "./components/NoteList";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<FilterField />
			<NoteField />
			<NoteList />
			<Footer />
		</div>
	);
}

export default App;
